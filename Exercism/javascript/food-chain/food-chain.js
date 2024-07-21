export class Song {
	constructor(lyrics = "") {
		this.lyricsVerses = [];
		this.lyrics =
			lyrics ||
			`I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a bird.
How absurd to swallow a bird!
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!
She swallowed the cow to catch the goat.
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.

I know an old lady who swallowed a horse.
She's dead, of course!`;

		this.prepareVerses();
	}

	prepareVerses() {
		const lines = this.lyrics.split("\n");
		let currentVerse = [];

		lines.forEach((line) => {
			if (line.trim() === "") {
				if (currentVerse.length > 0) {
					this.lyricsVerses.push(currentVerse.join("\n") + "\n");
					currentVerse = [];
				}
			} else {
				currentVerse.push(line);
			}
		});

		if (currentVerse.length > 0) {
			this.lyricsVerses.push(currentVerse.join("\n") + "\n");
		}
	}

	verse(n = 1) {
		return this.lyricsVerses[n - 1];
	}

	verses(start = 1, end = 1) {
		return this.lyricsVerses.slice(start - 1, end).join("\n") + "\n";
	}
}
