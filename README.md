# MobileFlashcards Project

This is my project for React Native course (the third part of React Nanodegree Program in Udacity). It's a [React Native](https://facebook.github.io/react-native/) based iOS/Android app that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

There's no backend for this project, all information is stored locally on the device.


## Tested on

The app was tested on iOS simulator and multiple iOS devices (no tests were performed on Android simulator/devices).


## Installation

To start the project locally:

* clone the github repository
* Install and start the iOS simulator
    - `yarn install`
    - `npm run ios`


## Usage

### Main Screen - Decks

When you start the app it'll show the screen with decks listing (there are 2 decks already there, when starting the app for the first time):
![1_mobileflashcards_decks](https://user-images.githubusercontent.com/611602/34470832-984d56ec-ef3a-11e7-9333-87231b5074c3.png)

* Selecting a deck shows it's details screen
* Selecting "Add" opens "Add Deck" screen

### Deck details

Deck screen presents deck info (title and number of cards) and options to add new card (opens new modal screen) and to start a quiz.

"Start Quiz" button is only enabled if there are any cards (questions) in the deck.

![2_mobileflashcards_deck](https://user-images.githubusercontent.com/611602/34470852-eaa0cf1e-ef3a-11e7-859c-9af49541c0b8.png)

### Add Deck

Add Deck modal screen allows user to enter the title for new deck. If the title is empty the Submit button is not enabled.
If the title is the same as the one already present in the app, the alert will be displayed and the duplicate will not be created.

After successful submit, the user is presented with the newly created Deck details screen.

![3_mobileflashcards_adddeck](https://user-images.githubusercontent.com/611602/34470862-2fc5a678-ef3b-11e7-84a8-453cbb801c27.png)

### Add Card

Add Card modal screen allows user to enter question and answer for the new card in selected Deck. 
The Submit button is enabled if both fields are not empty.
It's not allowed to create another card with same question in one deck, if the question is a duplicate, the alert will be displayed.

![4_mobileflashcards_addcard](https://user-images.githubusercontent.com/611602/34470883-7de382bc-ef3b-11e7-8c0f-5b6b9ac7fb75.png)

### Quiz

Quiz is implemented with StackNavigator that presents a separate screen for each card.

Each step (screen) presents:

* the progress (question number out of total number of questions in a deck)
* Question and an option to see the answer ("Answer" button)
* Answer and an option to see the question (if Answer was touched)
* "Correct" button - to mark the question as correctly answered and proceed to the next card
* "Incorrect" button - to mark the question as incorrectly answered and proceed to the next card
* "Cancel" option to abort the Quiz

![5_mobileflashcards_quiz](https://user-images.githubusercontent.com/611602/34470898-cce879d0-ef3b-11e7-999f-40f25b5061c0.png)

After last card was answered, the quiz shows the score screen.

The screen shows the percentage score and option to Restart Quiz and Back to Deck.

![6_mobileflashcards_quizscore](https://user-images.githubusercontent.com/611602/34470930-5b327452-ef3c-11e7-86d5-4ba63e334ec2.png)


### Local notifications

The app on start asks the user for a permission and schedules local notification for the next day 8PM. After any quiz is completed the app reschedules the local notification for the next day (so if a quiz is completed, the notification will not show up on this day).


## Contributing

This repository is my project for React Native Udacity course. Therefore, I most likely will not accept pull requests.


## Licensing

Copyright (c) 2018 raho

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.