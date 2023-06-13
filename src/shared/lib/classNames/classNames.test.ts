import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class21';
        expect(classNames('someClass', {}, ['class1', 'class21']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class21 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class21'],
        )).toBe(expected);
    });
});
