const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number,
        required: 'You must supply coordinates'
      }
    ],
    address: {
      type: String,
      required: 'You must supply an address!'
    }
  },
  photo: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author'
  }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });


// Define our indexes
storeSchema.index({
  name: 'text',
  description: 'text'
});

storeSchema.index({ location: '2dsphere' });

storeSchema.pre('save', async function (next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from runnning
  }
  this.slug = slug(this.name);
  // find other stores that have a the same name
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }

  next();
  // @TODO make more resiliant so slugs are unique
});

// Creating a custom method on the StoreModel
storeSchema.statics.getTagsList = function () {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]).cursor({}).exec().toArray();
};

storeSchema.statics.getTopStores = function () {
  return this.aggregate([
    // 1. Lookup Stores and populate their reviews
    {
      $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'store',
        as: 'reviews'
      }
    },
    // 2. filter for only items that hae 2 or more reivews
    {
      $match: {
        'reviews.1': { $exists: true }
      }
    },
    // 3. Add the average reviews filed
    {
      $project: {
        photo: '$$ROOT.photo',
        name: '$$ROOT.name',
        reviews: '$$ROOT.reviews',
        slug: '$$ROOT.slug',
        averageRating: { $avg: '$reviews.rating' }
      }
    },
    // 4. sort it by our new field, highest reviews first
    {
      $sort: { averageRating: -1 }
    },
    // 5. limit to at most 10
    {
      $limit: 10
    }
  ]).cursor({}).exec().toArray();
};

// 1. Find reviews where the stores _id property === reviews store property
storeSchema.virtual('reviews', {
  ref: 'Review', // What model to link?
  localField: '_id', // which filed on the Store?
  foreignField: 'store' // which field on the Review?
});

function autopopulate(next) {
  this.populate('reviews');
  next();
}

storeSchema.pre('find', autopopulate);
storeSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('Store', storeSchema);
