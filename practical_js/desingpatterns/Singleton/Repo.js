const repo = function () {

  let called = 0;

  let save = function (task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + ' times');
  }

  console.log('newing up task repo');
  return {
    save: save
  }
}

module.exports = repo();