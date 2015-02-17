﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
//Lbl-Label, Txt-Text, Err-Error, Msg-Message
define({
    root: ({
        map: {
            error: "Unable to create map" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "No group configured" // Appears when no group is configured
        },
        webMapList: {
            owner: "Owner", // Appears in web-map list description panel when it is set to true
            created: "Created", // Appears in web-map list description panel when it is set to true
            modified: "Modified", // Appears in web-map list description panel when it is set to true
            description: "Description", // Appears in web-map list description panel when it is set to true
            snippet: "Summary", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Access and use constraints", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Number of views", // Appears in web-map list description panel when it is set to true
            avgRating: "Rating", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Configured group is invalid or no items have been shared with this group yet", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Map Information" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Sign Out", // Command button to sign-out from the application
            pleaseSignInText: "Please sign in", // Appears when user needs to sign-in into the application
            showSelectedOption: "Show Selected", // Command button to show selected records in data-viewer
            showAllOption: "Show All", // Command button to show all the records in data-viewer
            clearSelectionOption: "Clear Selection", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom To Selected", // Command button to zoom map to selected records
            gridViewOption: "List View", // Command button to display list view
            mapViewOption: "Map View", // Command button to display map view
            gridMapViewOption: "Split View", // Command button to display split view
            settingsBtnToolTip: "Selection Options", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "View Options", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Layer Search" // Display tool-tip on command button to open a dialog box for finding a feature
        },
        dataviewer: {
            noFeaturesInCurrentExtent: "No issues in current map area", // Appears when no issues are available in current extent
            singleFeatureSelection: "Please select a single feature to view the item details", // Shown when user selects multiple features instead of single feature
            multipleFeatureSelection: "Please select a single feature to view the item details", // Shown when user selects multiple features instead of single feature
            photoAttachmentHeader: "Photo", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Please enter valid integer value between -32768 and 32767", // Shown when invalid integer value is entered while editing in data-viewer
            invalidNumber: "Please enter valid integer value between -2147483648 and 2147483647", // Shown when invalid integer value is entered while editing in data-viewer
            invalidFloat: "Please enter valid floating point value between -3.4E38 and 1.2E38", // Shown when invalid floating value is entered while editing in data-viewer
            invalidDouble: "Please enter valid double value between -2.2E308 and 1.8E308", // Shown when invalid double value is entered while editing in data-viewer
            invalidString: "Please enter valid value", // Shown when user enters invalid string value
            invalidDate: "Please enter valid date", // Shown when user enters invalid date value
            invalidNumericRange: "Minimum value ${minValue} and Maximum value ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Link"
        },
        config: {
            configNotDefined: "No configuration defined" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "No results found" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "View Details", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "View Map", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Zoom In", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zoom Out" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "You've been successfully signed out.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Click here to sign in" // Appears when user is signed-out from application and wants to sign-in again
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "en": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1
});