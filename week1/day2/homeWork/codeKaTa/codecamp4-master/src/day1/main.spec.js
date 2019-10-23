const { main } = require('./main');

describe('ให้สตริงที่มีตัวปิด วงเล็บ () ปีกกา {} หรือ ก้ามปู [] เครื่องหมายทั้งหมดต้อง balance กัน', () => {
	test('ให้สตริง "([])[]({})" ควรคืนค่า true', () => {
		expect(main("([])[]({})")).toBe(true)
	});
	test('ให้สตริง "([)]" ควรคืนค่า false', () => {
		expect(main("([)]")).toBe(false)
	});
	test('ให้สตริง "((()" ควรคืนค่า false', () => {
		expect(main("((()")).toBe(false)
	});
});
