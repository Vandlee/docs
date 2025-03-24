const foo = 'foo';
const bar = 'bar';
throw /* minify-error */ new Error(`VANDLEE: ${foo}, ${bar}`);
throw /* minify-error */ new Error(`VANDLEE: ${foo}` + `, ${bar}`);
throw /* minify-error */ new Error('VANDLEE: ' + `${foo}, ${bar}`);
