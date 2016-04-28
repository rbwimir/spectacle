windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleNextOrPreviousDisplay.moveWindowRectToDisplay(windowRect, visibleFrameOfDestinationScreen);
}, "SpectacleWindowActionNextDisplay");
