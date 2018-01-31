var Jordan;

function preload() {
	Jordan = loadImage("jordan.jpg")
}

function setup() {
	createCanvas(Jordan.width, Jordan.height);
}

function draw() {
	background(0);
	image(Jordan, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var startingIndex = (col + row * width) * 4;
			var r = pixels[startingIndex];
			var g = pixels[startingIndex + 1];
			var b = pixels[startingIndex + 2];
			var a = pixels[startingIndex + 3];
			if (keyIsPressed) {
				if (key == "1") {
					gray_filter(startingIndex, g, a);
				}
				if (key == "2") {
					zero_filter(startingIndex, g, a);
				}
				if (key == "3") {
					r_filter(startingIndex, r, g, b, a);
				}
				if (key == "4") {
					two_divide_filter(startingIndex, r, g, b, a);
				}
				if (key == "5") {
					two_multiply_filter(startingIndex, r, g, b, a);
				}
				if (key == "6") {
					r_subtract_filter(startingIndex, r, g, b, a);
				}
				if (key == "7") {
					Freestyle_filter(startingIndex, r, g, b, a);
				}
				if (key == "8") {
					Freestyle_filter_2(startingIndex, r, g, b, a);
				}
				if (key == "9") {
					var lastPixel = pixels.length - 1;
					pixels[lastPixel - startingIndex - 3] = r; //red
					pixels[lastPixel - startingIndex - 2] = g; //green
					pixels[lastPixel - startingIndex - 1] = b; //blue
					pixels[lastPixel - startingIndex - 0] = a; //alpha
				}
			}
		}
	}
	updatePixels();
}

function gray_filter(startingIndex, g, a) {
	pixels[startingIndex] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function r_filter(startingIndex, r, g, b, a) {
	pixels[startingIndex] = r; //red
	pixels[startingIndex + 1] = b; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function zero_filter(startingIndex, g, a) {
	pixels[startingIndex] = 0; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = 0; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function two_divide_filter(startingIndex, r, g, b, a) {
	pixels[startingIndex] = r / 2; //red
	pixels[startingIndex + 1] = g / 2; //green
	pixels[startingIndex + 2] = b / 2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function two_multiply_filter(startingIndex, r, g, b, a) {
	pixels[startingIndex] = r * 2; //red
	pixels[startingIndex + 1] = g * 2; //green
	pixels[startingIndex + 2] = b * 2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function r_subtract_filter(startingIndex, r, g, b, a) {
	pixels[startingIndex] = 255 - r; //red
	pixels[startingIndex + 1] = 255 - g; //green
	pixels[startingIndex + 2] = 255 - b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function Freestyle_filter(startingIndex, r, g, b, a) {
	pixels[startingIndex] = 150 - r; //red
	pixels[startingIndex + 1] = 30 + g; //green
	pixels[startingIndex + 2] = 250 - b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function Freestyle_filter_2(startingIndex, r, g, b, a) {
	if (startingIndex % 20 == 0) {
		pixels[startingIndex] = 255; //red
		pixels[startingIndex + 1] = 0; //green
		pixels[startingIndex + 2] = 0; //blue
		pixels[startingIndex + 3] = a; //alpha
	}
}