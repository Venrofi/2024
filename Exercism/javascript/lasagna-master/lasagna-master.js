/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer) {
	if (timer === undefined) {
		return "You forgot to set the timer.";
	}

	if (timer === 0) {
		return "Lasagna is done.";
	} else {
		return "Not done, please wait.";
	}
}

export function preparationTime(layers, timePerLayer = 2) {
	return layers.length * timePerLayer;
}

export function quantities(layers = []) {
	const noodleAmount = 50;
	const sauceAmount = 0.2;

	let noodleLayers = 0,
		sauceLayers = 0;

	layers.forEach((layer) => {
		if (layer === "sauce") sauceLayers += 1;
		if (layer === "noodles") noodleLayers += 1;
	});

	return {
		noodles: noodleAmount * noodleLayers,
		sauce: sauceAmount * sauceLayers,
	};
}

export function addSecretIngredient(friendsList = [], myList = []) {
	const lastIngredient = friendsList[friendsList.length - 1];
	myList.push(lastIngredient);
}

export function scaleRecipe(recipe = {}, portions = 2) {
	const scaledRecipe = {};

	for (let ingredient in recipe) {
		scaledRecipe[ingredient] = (recipe[ingredient] * portions) / 2;
	}

	return scaledRecipe;
}
