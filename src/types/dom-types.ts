export type MouseEnterEvent<T> = MouseEvent & {
	currentTarget: EventTarget & T;
};
