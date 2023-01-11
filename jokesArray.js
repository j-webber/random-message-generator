const jokes = [
    '1. Knock, Knock\nWho’s there?\nNobel.\nNobel who?\nNobel…that’s why I knocked!',
    '2. Knock, knock.\nWho’s there?\nTank.\nTank who?\nYou’re welcome.',
    '3. Knock, knock.\n' +
      'Who’s there?\n' +
      'Luke.\n' +
      'Luke who?\n' +
      'Luke through the peep hole and find out.',
    '4. Knock, knock.\n' +
      'Who’s there?\n' +
      'Figs.\n' +
      'Figs who?\n' +
      'Figs the doorbell, it’s not working!',
    '5. Knock, knock.\n' +
      'Who’s there?\n' +
      'Annie.\n' +
      'Annie who?\n' +
      'Annie thing you can do, I can do too!',
    '6. Knock, knock.\n' +
      'Who’s there?\n' +
      'Cow says.\n' +
      'Cow says who?\n' +
      'No, a cow says mooooo!',
    '7. Knock, knock.\n' +
      'Who’s there?\n' +
      'Hal.\n' +
      'Hal who?\n' +
      'Hal will you know if you don’t open the door?',
    '8. Knock, knock.\n' +
      'Who’s there?\n' +
      'Alice.\n' +
      'Alice who?\n' +
      'Alice fair in love and war.',
    '9. Knock, knock.\nWho’s there?\nSays.\nSays who?\nSays me!',
    '10. Knock, knock.\n' +
      'Who’s there?\n' +
      'Honey bee.\n' +
      'Honey bee who?\n' +
      'Honey bee a dear and get that for me please!',
    '11. Knock, knock.\n' +
      'Who’s there?\n' +
      'A little old lady.\n' +
      'A little old lady who?\n' +
      'Hey, you can yodel!',
    '12. Knock, knock.\n' +
      'Who’s there?\n' +
      'Euripides.\n' +
      'Euripides who?\n' +
      'Euripides clothes, you pay for them!',
    '13. Knock, knock.\nWho’s there?\nSnow.\nSnow who?\nSnow use. The joke is over.',
    '14. Knock, knock.\nWho’s there?\nHawaii.\nHawaii who?\nI’m good. Hawaii you?',
    '15. Knock, knock.\nWho’s there?\nWoo.\nWoo who?\nGlad you’re excited, too!',
    '16. Knock, knock.\n' +
      'Who’s there?\n' +
      'Banana.\n' +
      'Banana who?\n' +
      'Knock, knock.\n' +
      'Banana.\n' +
      'Banana who?\n' +
      'Knock, knock.\n' +
      'Who’s there?\n' +
      'Orange.\n' +
      'Orange who?\n' +
      'Orange you glad I didn’t say banana?',
    '17. Knock, knock.\n' +
      'Who’s there?\n' +
      'Orange.\n' +
      'Orange who?\n' +
      'Orange you going to let me in?',
    '18. Knock, knock.\n' +
      'Who’s there?\n' +
      'Who.\n' +
      'Who who?\n' +
      'I didn’t know you were an owl!',
    '19. Knock, knock.\n' +
      'Who’s there?\n' +
      'Anita.\n' +
      'Anita who?\n' +
      'Let me in! Anita borrow something.',
    '20. Knock, knock.\n' +
      'Who’s there?\n' +
      'Water.\n' +
      'Water who?\n' +
      'Water you doing telling jokes right now? Don’t you have things to do?',
    '21. Knock, knock.\nWho’s there?\nLeaf.\nLeaf who?\nLeaf me alone!',
    '22. Knock, knock.\n' +
      'Who’s there?\n' +
      'Annie.\n' +
      'Annie who?\n' +
      'Annie way you can let me in?',
    '23. Knock, knock.\nWho’s there?\nNana.\nNana who?\nNana your business!',
    '24. Knock, knock.\n' +
      'Who’s there?\n' +
      'Needle.\n' +
      'Needle who?\n' +
      'Needle little help right now!',
    '25. Knock, knock.\nWho’s there?\nCanoe.\nCanoe who?\nCanoe come out now?',
    'Related: 101 Fun Facts',
    '26. Knock, knock.\nWho’s there?\nIran.\nIran who?\nIran here. I’m tired!',
    '27. Knock, knock.\n' +
      'Who’s there?\n' +
      'Amos.\n' +
      'Amos who?\n' +
      'A mosquito. Look, right there!',
    '28. Knock, knock.\n' +
      'Who’s there?\n' +
      'Some.\n' +
      'Some who?\n' +
      'Maybe some day you’ll recognize me!',
    '29. Knock, knock.\n' +
      'Who’s there?\n' +
      'Dozen.\n' +
      'Dozen who?\n' +
      'Dozen anyone want to let me in?',
    '30. Knock, knock.\n' +
      'Who’s there?\n' +
      'Dwayne.\n' +
      'Dwayne who?\n' +
      'Dwayne the sink. I need to use it!',
    '31. Knock, knock.\n' +
      'Who’s there?\n' +
      'Thermos.\n' +
      'Thermos who?\n' +
      'Thermos be a better way to get to you.',
    '32. Knock, knock.\n' +
      'Who’s there?\n' +
      'To.\n' +
      'To who?\n' +
      'Actually, it’s to whom.33. Knock, knock.\n' +
      'Who’s there?\n' +
      'Lettuce.\n' +
      'Lettuce who?\n' +
      'Lettuce in, it’s cold out here!',
    '34. Knock, knock.\n' +
      'Who’s there?\n' +
      'Razor.\n' +
      'Razor who?\n' +
      'Razor hands, this is a stick up!',
    '35. Knock, knock.\nWho’s there?\nAlec.\nAlec who?\nAlectricity. BUZZ!',
    '36. Knock, knock.\nWho’s there?\nEurope.\nEurope who?\nNo I’m not!',
    '37. Knock, knock.\nWho’s there?\nOlive.\nOlive who?\nOlive you.',
    '38. Knock, knock.\n' +
      'Who’s there?\n' +
      'Amarillo.\n' +
      'Amarillo who?\n' +
      'Amarillo nice person.',
    '39. Knock, knock.\n' +
      'Who’s there?\n' +
      'Candice.\n' +
      'Candice who?\n' +
      'Candice snack be eaten?',
    '40. Knock, knock.\n' +
      'Who’s there?\n' +
      'Police.\n' +
      'Police who?\n' +
      'Police let me in, it’s chilly out!',
    'Related: 200 Jokes for Kids',
    '41. Knock, knock.\n' +
      'Who’s there?\n' +
      'Ice cream.\n' +
      'Ice cream who?\n' +
      'Ice cream if you don’t give me some candy!',
    '42. Knock, knock.\nWho’s there?\nEtch.\nEtch who?\nBless you!',
    '43. Knock, knock.\nWho’s there?\nBoo.\nBoo who?\nDon’t cry, it’s just a joke.',
    '44. Knock, knock.\n' +
      'Who’s there?\n' +
      'Cher.\n' +
      'Cher who?\n' +
      'Cher would be nice if you opened the door!',
    '45. Knock, knock.\n' +
      'Who’s there?\n' +
      'Theodore.\n' +
      'Theodore who?\n' +
      'Theodore is stuck. Open up!',
    'Related: 101 Corny Jokes',
    '46. Knock, knock.\n' +
      'Who’s there?\n' +
      'Stopwatch.\n' +
      'Stopwatch who?\n' +
      'Stopwatch you’re doing and let me in!',
    '47. Knock, knock.\nWho’s there?\nSpell.\nSpell who?\nW. H. O.',
    '48. Knock, knock.\n' +
      'Who’s there?\n' +
      'Robin.\n' +
      'Robin who?\n' +
      'Robin you. Give me your money!',
    '49. Knock, knock.\nWho’s there?\nIcy.\nIcy who?\nIcy you looking at me!',
    '50. Knock, knock.\n' +
      'Who’s there?\n' +
      'Voodoo.\n' +
      'Voodoo who?\n' +
      'Voodoo you think you are?',
    'Related: 250 Would You Rather Questions',
    '51. Knock, knock.\nWho’s there?\nCash.\nCash who?\nNah, I’m more into almonds.',
    '52. Knock, knock.\n' +
      'Who’s there?\n' +
      'Mustache.\n' +
      'Mustache who?\n' +
      'I mustache you a question.',
    '53. Knock, knock.\nWho’s there?\nMary.\nMary who?\nMary Christmas!',
    '54. Knock, knock.\nWho’s there?\nAlex.\nAlex who?\nAlex-plain later!',
    '55. Knock, knock.\n' +
      'Who’s there?\n' +
      'Iva.\n' +
      'Iva who?\n' +
      'I’ve a sore hand from knocking!',
    '56. Knock, knock.\n' +
      'Who’s there?\n' +
      'Ketchup.\n' +
      'Ketchup who?\n' +
      'Ketchup with me and I’ll tell you!',
    '57. Knock, knock.\nWho’s there?\nCanoe.\nCanoe who?\nCanoe help me get inside?',
    '58. Knock knock.\n' +
      'Who’s there?\n' +
      'Needle.\n' +
      'Needle who?\n' +
      'Needle little money please.',
    '59. Knock, knock.\nWho’s there?\nWatson.\nWatson who?\nWatson TV right now?',
    '60. Knock, knock.\nWho’s there?\nAnee.\nAnee who?\nAnee one you like!',
    '61. Knock, knock.\n' +
      'Who’s there?\n' +
      'Dozen.\n' +
      'Dozen who?\n' +
      'Dozen anybody want to let me in?',
    '62. Knock, knock.\nWho’s there?\nDishes.\nDishes who?\nDish is a nice place!',
    '63. Knock knock.\n' +
      'Who’s there?\n' +
      'A herd.\n' +
      'A herd who?\n' +
      'A herd you were home, so here I am!',
    '64. Knock, knock.\n' +
      'Who’s there?\n' +
      'Avenue.\n' +
      'Avenue who?\n' +
      'Avenue knocked on this door before?',
    '65. Knock, knock.\nWho’s there?\nAlthea.\nAlthea who?\nAlthea later alligator!',
    '66. Knock, knock.\nWho’s there?\nArfur.\nArfur who?\nArfur got!',
    '67. Knock knock.\nWho’s there?\nOtto.\nOtto who?\nOtto know. I forgot.',
    '68. Knock, knock.\n' +
      'Who’s there?\n' +
      'Norma Lee.\n' +
      'Norma Lee who?\n' +
      'Norma Lee I don’t knock on random doors, but I had to meet you!',
    '69. Knock, knock.\n' +
      'Who’s There?\n' +
      'Imma.\n' +
      'Imma who?\n' +
      'Imma getting older waiting for you to open up!',
    '70. Knock, knock.\nWho’s there?\nYukon.\nYukon who?\nYukon say that again!',
    '71. Knock, knock.\nWho’s there?\nViper.\nViper who?\nViper nose, it’s running!',
    '72. Knock, knock.\nWho’s there?\nCD.\nCD who?\nCD person on your doorstep?',
    '73. Knock, knock.\n' +
      'Who’s there?\n' +
      'Claire.\n' +
      'Claire who?\n' +
      'Claire a path, I’m coming through!',
    '74. Knock knock.\n' +
      'Who’s there?\n' +
      'Roach.\n' +
      'Roach who?\n' +
      'Roach you a text. Did you get it?',
    '75. Knock, knock.\nWho’s there?\nSomebody too short to ring the doorbell!',
    '76. Knock, knock.\n' +
      'Who’s there?\n' +
      'Harry.\n' +
      'Harry who?\n' +
      'Harry up, it’s cold outside!',
    '77. Knock, knock.\n' +
      'Who’s there?\n' +
      'Ivor.\n' +
      'Ivor who?\n' +
      "Ivor you let me in or I'll climb through the window.",
    '78. Knock, knock.\n' +
      'Who’s there?\n' +
      'Abbot.\n' +
      'Abbot who?\n' +
      'Abbot you don’t know who this is!',
    '79. Knock, knock.\n' +
      'Who’s there?\n' +
      'Adore.\n' +
      'Adore who?\n' +
      'Adore is between us, so open it!',
    '80. Knock, knock.\n' +
      'Who’s there?\n' +
      'Noah.\n' +
      'Noah who?\n' +
      'Noah good place we can go hang out?',
    '81. Knock, knock.\nWho’s there?\nKirtch.\nKirtch who?\nGod bless you!',
    '82. Knock, knock.\nWho’s there?\nJustin.\nJustin who?\nJustin time for dinner.',
    '83. Knock knock.\nWho’s There?\nImpatient cow.\nImpatient cow wh-?\nMooooo!',
    '84. Knock, knock.\n' +
      'Who’s there?\n' +
      'Sadie.\n' +
      'Sadie who?\n' +
      'Sadie magic word and I’ll come in!',
    '85. Will you remember me in a minute?\n' +
      'Yes.\n' +
      'Will you remember me in a week?\n' +
      'Yes.\n' +
      'Knock, knock.\n' +
      'Who’s there?\n' +
      'You didn’t remember me!',
    '86. Knock, knock.\nWho’s there?\nIona.\nIona who?\nIona new toy!',
    '87. Knock, knock.\nWho’s there?\nTwo knee.\nTwo knee who?\nTwo-knee fish!',
    '88. Knock, knock.\nWho’s there?\nAbby.\nAbby who?\nAbby birthday to you!',
    '89. Knock, knock.\n' +
      'Who’s there?\n' +
      'Cows go\n' +
      'Cows go who?\n' +
      'Cows don’t go who, they go moo!',
    '90. Knock, knock\nWho’s there?\nBen.\nBen who?\nBen knocking for 10 minutes!',
    '91. Knock, knock.\nWho’s there?\nIsabel.\nIsabel who?\nIsabel working?',
    '92. Knock, knock.\n' +
      'Who’s there?\n' +
      'Aida.\n' +
      'Aida who?\n' +
      'Aida sandwich for lunch today.',
    '92. Knock, knock.\n' +
      'Who’s there?\n' +
      'Scold.\n' +
      'Scold who?\n' +
      'Scold enough out here to go ice skating!',
    '93. Knock, knock.\n' +
      'Who’s there?\n' +
      'I am.\n' +
      'I am who?\n' +
      'Wait, you don’t know who you are?',
    "94. Knock, knock.\nWho's there?\nAmanda.\nAmanda who?\nA man da fix your door!",
    '95. Knock, knock.\n' +
      "Who's there?\n" +
      'Al.\n' +
      'Al who?\n' +
      'Al give you a hug if you open this door!',
    "96. Knock, knock.\nWho's there?\nAmish.\nAmish who?\nYou're not a shoe!",
  ];