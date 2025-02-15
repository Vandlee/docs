const foo = 'foo';
const bar = 'bar';
throw /* minify-error */ new Error(`U-SHII: ${foo}, ${bar}`);
throw /* minify-error */ new Error(`U-SHII: ${foo}` + `, ${bar}`);
throw /* minify-error */ new Error('U-SHII: ' + `${foo}, ${bar}`);
