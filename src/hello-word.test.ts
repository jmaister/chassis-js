import { textSpanContainsPosition } from 'typescript';
import {sum} from './hello-world';

test("add numbers", () => {
    expect(sum(1, 2)).toBe(3);
});
