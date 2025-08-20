'use server';

/**
 * @fileOverview An AI agent that suggests improvements to a portfolio based on a desired style.
 *
 * - getPortfolioImprovementSuggestions - A function that handles the portfolio improvement suggestion process.
 * - PortfolioImprovementSuggestionsInput - The input type for the getPortfolioImprovementSuggestions function.
 * - PortfolioImprovementSuggestionsOutput - The return type for the getPortfolioImprovementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioImprovementSuggestionsInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The current content of the portfolio.'),
  desiredStyle: z
    .string()
    .describe(
      'The desired style of the portfolio (e.g., minimalist, corporate).'
    ),
});
export type PortfolioImprovementSuggestionsInput =
  z.infer<typeof PortfolioImprovementSuggestionsInputSchema>;

const PortfolioImprovementSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'AI-powered suggestions on how to improve the portfolio content to match the desired style.'
    ),
});
export type PortfolioImprovementSuggestionsOutput =
  z.infer<typeof PortfolioImprovementSuggestionsOutputSchema>;

export async function getPortfolioImprovementSuggestions(
  input: PortfolioImprovementSuggestionsInput
): Promise<PortfolioImprovementSuggestionsOutput> {
  return portfolioImprovementSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioImprovementSuggestionsPrompt',
  input: {schema: PortfolioImprovementSuggestionsInputSchema},
  output: {schema: PortfolioImprovementSuggestionsOutputSchema},
  prompt: `You are an AI portfolio assistant. Your task is to provide suggestions on how to improve a portfolio's content to match a desired style.

    Current Portfolio Content: {{{portfolioContent}}}
    Desired Style: {{{desiredStyle}}}

    Provide specific and actionable suggestions to improve the portfolio content, such as phrasing, keyword optimization, and overall presentation, so that the portfolio matches the desired style.
    Format the suggestions as a single paragraph.`,
});

const portfolioImprovementSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioImprovementSuggestionsFlow',
    inputSchema: PortfolioImprovementSuggestionsInputSchema,
    outputSchema: PortfolioImprovementSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
