const foo = 'foo';
const bar = 'bar';
throw /* minify-error */ new Error(`YUSHII: ${foo}, ${bar}`);
throw /* minify-error */ new Error(`YUSHII: ${foo}` + `, ${bar}`);
throw /* minify-error */ new Error('YUSHII: ' + `${foo}, ${bar}`);
