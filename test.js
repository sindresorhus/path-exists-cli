import test from 'ava';
import execa from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js', ['noop']));
	await t.notThrowsAsync(execa('./cli.js', ['node_modules']));
});
