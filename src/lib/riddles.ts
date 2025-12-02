export interface SymRiddle {
	word: string;
	hint: string;
	german: boolean;
}

export const RIDDLES: SymRiddle[] = [
	{ word: 'Ally', hint: 'Thesis Example', german: false },
	{ word: 'Dependent Assertions', hint: 'Research', german: false },
	{ word: 'Signalstoerung', hint: 'Common Issue', german: true },
	{ word: 'Grape juice', hint: 'Food and Drink', german: false },
	{ word: 'Non-determinism', hint: 'Research', german: false },
	{ word: 'Orchestra', hint: 'Hobby', german: false },
	{ word: 'Program Instrumentation', hint: 'Research', german: false },
	{ word: 'Control-Flow Tracing', hint: 'Research', german: false }
]
	.map((x) => ({
		...x,
		word: x.word.toUpperCase()
	}))
	.sort((a, b) => a.word.length - b.word.length);
