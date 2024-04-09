// @ts-check

// Task #1

export function Size(width, height) {
	this.width = width ?? 80;
	this.height = height ?? 60;
}

Size.prototype.resize = function (newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
};

// Task #2

export function Position(x, y) {
	this.x = x ?? 0;
	this.y = y ?? 0;
}

Position.prototype.move = function (newX, newY) {
	this.x = newX;
	this.y = newY;
};

// Task #3

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	resize(newSize) {
		if (newSize.width < 1) newSize.width = 1;
		if (newSize.height < 1) newSize.height = 1;

		if (newSize.width > this.screenSize.width) {
			newSize.width = this.screenSize.width - this.position.x;
		}

		if (newSize.height > this.screenSize.height) {
			newSize.height = this.screenSize.height - this.position.y;
		}

		this.size.width = newSize.width;
		this.size.height = newSize.height;
	}

	move(newPosition) {
		this.position.x = newPosition.x;
		this.position.y = newPosition.y;

		if (newPosition.x < 0) this.position.x = 0;
		if (newPosition.y < 0) this.position.y = 0;

		if (this.position.x + this.size.width > this.screenSize.width) {
			this.position.x = this.screenSize.width - this.size.width;
		}

		if (this.position.y + this.size.height > this.screenSize.height) {
			this.position.y = this.screenSize.height - this.size.height;
		}
	}
}

export function changeWindow(programWindow) {
	programWindow.move(new Position());

	programWindow.resize(new Size(400, 300));
	programWindow.move(new Position(100, 150));

	return programWindow;
}
