import test from 'ava';
import execa from 'execa';

test(async t => {
	t.throws(execa('./cli.js', ['noop'], {cwd: __dirname}));
	t.notThrows(execa('./cli.js', ['node_modules'], {cwd: __dirname}));
});
