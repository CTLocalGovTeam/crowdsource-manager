{
    "configurationSettings": [
        {
            "category": "<b>Configure template</b>",
            "fields": [
                {
                    "type": "group",
                    "label": "Select group",
                    "tooltip": "Group displayed in the application"
                },
                {
                    "type": "color",
                    "fieldName": "theme",
                    "tooltip": "Color theme to use",
                    "label": "Color Scheme"
                }
            ]
        },
        {
            "category": "<b>Application header</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Configure Application header settings."
                },
                {
                    "type": "string",
                    "fieldName": "applicationName",
                    "label": "Title",
                    "tooltip": "Application title displayed in header"
                },
                {
                    "label": "Icon URL",
                    "fieldName": "applicationIcon",
                    "type": "string",
                    "tooltip": "Icon in top left corner of application. Icon should be 48px high."
                },
                {
                    "label": "Favicon URL",
                    "fieldName": "applicationFavicon",
                    "type": "string",
                    "tooltip": "Application favicon."
                }
            ]
        },
        {
            "category": "<b>General Settings</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Configure General fields settings."
                },
                {
                    "type": "string",
                    "fieldName": "zoomLevel",
                    "label": "Zoom Level",
                    "tooltip": "Configure zoom level"
                }
            ]
        },
        {
            "category": "<b>Webmap information settings</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "Configure settings for details that are shown when info icon is clicked in the list of maps."
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoDescription",
                    "label": "Show description",
                    "tooltip": "Enable to show webmap description"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoSnippet",
                    "label": "Show snippet",
                    "tooltip": "Enable to show webmap snippet"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoOwner",
                    "label": "Show owner",
                    "tooltip": "Enable to show webmap owner"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoCreated",
                    "label": "Show created date",
                    "tooltip": "Enable to show webmap created date"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoModified",
                    "label": "Show modified date",
                    "tooltip": "Enable to show webmap modified date"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoLicenseInfo",
                    "label": "Show license information",
                    "tooltip": "Enable to show webmap license information"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoAccessInformation",
                    "label": "Show access information",
                    "tooltip": "Enable to show webmap access information"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoTags",
                    "label": "Show tags",
                    "tooltip": "Enable to show webmap tags"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoNumViews",
                    "label": "Show number of views",
                    "tooltip": "Enable to show webmap number of views"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoAvgRating",
                    "label": "Show average rating",
                    "tooltip": "Enable to show webmap average rating"
                }
            ]
        }
    ],
    "values": {
        "group": "e96bd5b249a04235bcd7399cb80ee3cf",
        "theme": "#d15706",
        "applicationName": "",
        "applicationIcon": "",
        "applicationFavicon": "",
        "zoomLevel": 12,
        "webMapInfoDescription": true,
        "webMapInfoSnippet": true,
        "webMapInfoOwner": true,
        "webMapInfoCreated": false,
        "webMapInfoModified": false,
        "webMapInfoLicenseInfo": false,
        "webMapInfoAccessInformation": false,
        "webMapInfoTags": false,
        "webMapInfoNumViews": false,
        "webMapInfoAvgRating": false
    }
}