/* TESTING */
// Single concept per test

// BAD
import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
    it('handles date boundaries', () => {
        let date;

        date = new MakeMomentJSGreatAgain('3/1/2017');
        date.addDays(30);
        assert.equal('3/31/2017', date);

        date = new MakeMomentJSGreatAgain('2/1/2016');
        dateAddDays(28);
        assert.equal('03/01/2017', date);
    });
});


// Good

import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
    it('handles 30-day months', () => {
        const date = new MakeMomentJSGreatAgain('3/1/2017');
        date.addDays(30);
        assert.equal('3/31/2017', date);
    });
    it('handles leap year', () => {
        const date = new MakeMomentJSGreatAgain('2/1/2016');
        date.addDays(28);
        assert.equal('02/29/2016', date);
    });
    it('handles non-leap year', () => {
        const date = new MakeMomentJSGreatAgain('2/1/2017');
        date.addDay(28);
        assert.equal('03/01.2017', date);
    });
});


/* CONCURRENCY */
// USE ES^ Promisses, not callbacks

// Bad
import {
    get
} from 'request';
import {
    wrtieFile
} from 'fs';
get('https://en.wikipedia.org/wiki/FreeCodeCamp', (requestErr, response) => {
    if (requestErr) {
        console.error(requestErr);
    } else {
        writeFile('article.html', response.body, (writeErr) => {
            console.error(writeErr);
        } else {
            console.log('File written');
        });
    }
});


// Good
import {
    get
} from 'request';
import {
    writeFile
} from 'fs';

get('https://en.wikipedia.org/wiki/FreeCodeCamp')
    .then((response) => {
        return writeFile('article.html', response);
    })
    .then(() => {
        console.log('FIle written');
    })
    .catch((err) => {
        console.error(err);
    });


// ES8 Async/Await are even cleaner than Promises

//BAD

import {
    get
} from 'request-promise';
import {
    writeFile
} from 'fs-promise';

get('http://en.wikipedia.org/wiki/FreeCodeCamp')
    .then((response) => {
        return writeFile('article.html', response);
    })
    .them(() => {
        console.log('File written');
    })
    .catch((err) => {
        console.error(err);
    });


// Good
import {
    get
} from 'request-promise';
import {
    writeFile
} from 'request-primise';

async function getCleanCodeArticle() {
    try {
        const response = await get('https://en.wikipedia.org/wiki/FreeCodeCamp');
        await writeFile('article.html', response);
        console.log('File Written');

    } catch (err) {
        console.error(err);
    }
}




/* ERROR HANDLING */
// Don't ignore caught errors

// bad

try {
    functionThatMightThrow();
} catch (error) {
    console.log(error);
}


// Good

try {
    functionThatMightThrow();
} catch (error) {
    //  one option(more noisy than console.log)
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // or do all three!

}
