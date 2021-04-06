import * as vscode from 'vscode';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

type fileData = [string, string];
let filesToCreate: Array<fileData> = new Array<fileData>();

function createIQManifestFile(id: string, name: string): fileData {
    return ['manifest.xml',
        `<iq:manifest xmlns:iq="http://www.garmin.com/xml/connectiq" version="3">
    <iq:application entry="${name}" id="${id}" launcherIcon="@Drawables.LauncherIcon" minSdkVersion="1.2.0" name="@Strings.AppName" type="watch-app" version="0.0.1">
        <iq:products>
            <!-- All of the available products are listed below. Delete any that
                are not targeted by your app. -->
            <iq:product id="approachs60"/>
            <iq:product id="approachs62"/>
            <iq:product id="d2bravo"/>
            <iq:product id="d2bravo_titanium"/>
            <iq:product id="d2charlie"/>
            <iq:product id="d2delta"/>
            <iq:product id="d2deltapx"/>
            <iq:product id="d2deltas"/>
            <iq:product id="descentmk1"/>
            <iq:product id="edge1030"/>
            <iq:product id="edge1030bontrager"/>
            <iq:product id="edge520plus"/>
            <iq:product id="edge530"/>
            <iq:product id="edge820"/>
            <iq:product id="edge830"/>
            <iq:product id="edge_1000"/>
            <iq:product id="edge_520"/>
            <iq:product id="edgeexplore"/>
            <iq:product id="epix"/>
            <iq:product id="fenix3"/>
            <iq:product id="fenix3_hr"/>
            <iq:product id="fenix5"/>
            <iq:product id="fenix5plus"/>
            <iq:product id="fenix5s"/>
            <iq:product id="fenix5splus"/>
            <iq:product id="fenix5x"/>
            <iq:product id="fenix5xplus"/>
            <iq:product id="fenix6"/>
            <iq:product id="fenix6pro"/>
            <iq:product id="fenix6s"/>
            <iq:product id="fenix6spro"/>
            <iq:product id="fenix6xpro"/>
            <iq:product id="fenixchronos"/>
            <iq:product id="fr230"/>
            <iq:product id="fr235"/>
            <iq:product id="fr245"/>
            <iq:product id="fr245m"/>
            <iq:product id="fr630"/>
            <iq:product id="fr645"/>
            <iq:product id="fr645m"/>
            <iq:product id="fr735xt"/>
            <iq:product id="fr920xt"/>
            <iq:product id="fr935"/>
            <iq:product id="fr945"/>
            <iq:product id="gpsmap66"/>
            <iq:product id="gpsmap86"/>
            <iq:product id="legacyherocaptainmarvel"/>
            <iq:product id="legacyherofirstavenger"/>
            <iq:product id="legacysagadarthvader"/>
            <iq:product id="legacysagarey"/>
            <iq:product id="marqadventurer"/>
            <iq:product id="marqathlete"/>
            <iq:product id="marqaviator"/>
            <iq:product id="marqcaptain"/>
            <iq:product id="marqcommander"/>
            <iq:product id="marqdriver"/>
            <iq:product id="marqexpedition"/>
            <iq:product id="oregon7xx"/>
            <iq:product id="rino7xx"/>
            <iq:product id="venu"/>
            <iq:product id="vivoactive"/>
            <iq:product id="vivoactive3"/>
            <iq:product id="vivoactive3d"/>
            <iq:product id="vivoactive3m"/>
            <iq:product id="vivoactive3mlte"/>
            <iq:product id="vivoactive4"/>
            <iq:product id="vivoactive4s"/>
            <iq:product id="vivoactive_hr"/>
        </iq:products>
        <iq:permissions>
            <!-- All of the available permissions are listed below. Delete any
                that your app does not require. -->
            <iq:uses-permission id="Ant"/>
            <iq:uses-permission id="Background"/>
            <iq:uses-permission id="BluetoothLowEnergy"/>
            <iq:uses-permission id="Communications"/>
            <iq:uses-permission id="Fit"/>
            <iq:uses-permission id="FitContributor"/>
            <iq:uses-permission id="PersistedContent"/>
            <iq:uses-permission id="PersistedLocations"/>
            <iq:uses-permission id="Positioning"/>
            <iq:uses-permission id="PushNotification"/>
            <iq:uses-permission id="Sensor"/>
            <iq:uses-permission id="SensorHistory"/>
            <iq:uses-permission id="SensorLogging"/>
            <iq:uses-permission id="UserProfile"/>
        </iq:permissions>
        <iq:languages>
            <!-- All of the available languages are listed below. Delete any
                that will not be supported by your app. -->
            <iq:language>ara</iq:language>
            <iq:language>bul</iq:language>
            <iq:language>ces</iq:language>
            <iq:language>dan</iq:language>
            <iq:language>deu</iq:language>
            <iq:language>dut</iq:language>
            <iq:language>eng</iq:language>
            <iq:language>est</iq:language>
            <iq:language>fin</iq:language>
            <iq:language>fre</iq:language>
            <iq:language>gre</iq:language>
            <iq:language>heb</iq:language>
            <iq:language>hrv</iq:language>
            <iq:language>hun</iq:language>
            <iq:language>ind</iq:language>
            <iq:language>ita</iq:language>
            <iq:language>jpn</iq:language>
            <iq:language>kor</iq:language>
            <iq:language>lav</iq:language>
            <iq:language>lit</iq:language>
            <iq:language>nob</iq:language>
            <iq:language>pol</iq:language>
            <iq:language>por</iq:language>
            <iq:language>ron</iq:language>
            <iq:language>rus</iq:language>
            <iq:language>slo</iq:language>
            <iq:language>slv</iq:language>
            <iq:language>spa</iq:language>
            <iq:language>swe</iq:language>
            <iq:language>tha</iq:language>
            <iq:language>tur</iq:language>
            <iq:language>ukr</iq:language>
            <iq:language>vie</iq:language>
            <iq:language>zhs</iq:language>
            <iq:language>zht</iq:language>
            <iq:language>zsm</iq:language>
        </iq:languages>
        <iq:barrels/>
    </iq:application>
</iq:manifest>`];
}

function createJungleFile(): fileData {
    return ['monkey.jungle',
        `project.manifest = manifest.xml
base.sourcePath = source
`];
}

function createVSCodeTasksFile(): fileData {
    return ['.vscode/tasks.json',
        `{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    //
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build",
            "type": "process",
            "command": "\${config:connectiq.javaPath}/bin/java.exe",
"args": [
    "-Dfile.encoding=UTF-8",
    "-Dapple.awt.UIElement=true",
    "-jar",
    "\${config:connectiq.sdkPath}/bin/monkeybrains.jar",
    "-o",
    "\${workspaceFolder}/bin/\${workspaceFolderBasename}.prg",
    "-w",
    "-y",
    "\${config:connectiq.developerKey}",
    "-r",
    "-f",
    "\${workspaceFolder}/monkey.jungle"
],
    "group": {
    "kind": "build",
        "isDefault": true
},
"presentation": {
    "clear": true,
        "panel": "dedicated",
            "reveal": "always"
},
"problemMatcher": [
    {
        "owner": "mc",
        "fileLocation": [
            "absolute"
        ],
        "pattern": {
            "regexp": "^(.*): (.*): (.*):([0-9]*),([0-9]*): (.*)$",
            "severity": 1,
            "file": 3,
            "line": 4,
            "column": 5,
            "message": 6
        }
    }
]
        },
{
    "label": "Build for device",
        "type": "process",
            "command": "\${config:connectiq.javaPath}/bin/java.exe",
"args": [
    "-Dfile.encoding=UTF-8",
    "-Dapple.awt.UIElement=true",
    "-jar",
    "\${config:connectiq.sdkPath}/bin/monkeybrains.jar",
    "-o",
    "\${workspaceFolder}/bin/\${workspaceFolderBasename}.prg",
    "-w",
    "-y",
    "\${config:connectiq.developerKey}",
    "-d",
    "\${input:watchModel}",
    "-s",
    "\${input:sdkVersion}",
    "-r",
    "-f",
    "\${workspaceFolder}/monkey.jungle"
],
    "group": "build",
        "presentation": {
    "panel": "shared",
        "reveal": "always"
},
"problemMatcher": [
    {
        "owner": "mc",
        "fileLocation": [
            "absolute"
        ],
        "pattern": {
            "regexp": "^(.*): (.*): (.*):([0-9]*),([0-9]*): (.*)$",
            "severity": 1,
            "file": 3,
            "line": 4,
            "column": 5,
            "message": 6
        }
    }
]
},
{
    "label": "Simulate",
        "detail": "Run the app in the Connect IQ Device Simulator",
            "type": "shell",
                "command": "\${config:connectiq.sdkPath}/bin/monkeydo.bat",
                    "args": [
                        "\${workspaceFolder}/bin/\${workspaceFolderBasename}.prg",
                        "\${input:watchModel}"
                    ],
                        "dependsOrder": "sequence",
                            "dependsOn": [
                                "Build for device"
                            ],
                                "group": "none",
                                    "presentation": {
        "clear": true,
            "panel": "dedicated",
                "reveal": "always"
    },
    "problemMatcher": []
},
{
    "label": "Export IQ file",
        "type": "process",
            "command": "\${config:connectiq.javaPath}/bin/java.exe",
                "args": [
                    "-Dfile.encoding=UTF-8",
                    "-Dapple.awt.UIElement=true",
                    "-jar",
                    "\${config:connectiq.sdkPath}/bin/monkeybrains.jar",
                    "-o",
                    "\${workspaceFolder}/bin/\${workspaceFolderBasename}.iq",
                    "-e",
                    "-w",
                    "-y",
                    "\${config:connectiq.developerKey}",
                    "-r",
                    "-f",
                    "\${workspaceFolder}/monkey.jungle"
                ],
                    "group": "test",
                        "presentation": {
        "clear": true,
            "panel": "dedicated",
                "reveal": "always"
    },
    "problemMatcher": []
},
{
    "label": "Build unit tests",
        "type": "process",
            "command": "\${config:connectiq.javaPath}/bin/java.exe",
                "args": [
                    "-Dfile.encoding=UTF-8",
                    "-Dapple.awt.UIElement=true",
                    "-jar",
                    "\${config:connectiq.sdkPath}/bin/monkeybrains.jar",
                    "-o",
                    "\${workspaceFolder}/bin/\${workspaceFolderBasename}.prg",
                    "-w",
                    "-y",
                    "\${config:connectiq.developerKey}",
                    "--unit-test",
                    "-f",
                    "\${workspaceFolder}/monkey.jungle"
                ],
                    "group": "test",
                        "presentation": {
        "clear": true,
            "panel": "dedicated",
                "reveal": "always"
    },
    "problemMatcher": []
},
{
    "label": "Run No Evil",
        "detail": "Run unit tests for project",
            "type": "shell",
                "command": "\${config:connectiq.sdkPath}/bin/monkeydo.bat",
                    "args": [
                        "\${workspaceFolder}/bin/\${workspaceFolderBasename}.prg",
                        "\${input:watchModel}",
                        "/t"
                    ],
                        "dependsOrder": "sequence",
                            "dependsOn": [
                                "Build unit tests"
                            ],
                                "group": {
        "kind": "test",
            "isDefault": true
    },
    "presentation": {
        "clear": true,
            "panel": "dedicated",
                "reveal": "always"
    },
    "problemMatcher": []
},
{
    "label": "Start Simulator",
        "detail": "Start the Connect IQ Device Simulator",
            "type": "process",
                "command": "\${config:connectiq.sdkPath}/bin/connectiq",
                    "windows": {
        "command": "\${config:connectiq.sdkPath}/bin/simulator.exe",
            },
    "args": [],
        "group": "none",
            "presentation": {
        "panel": "shared",
            "reveal": "never"
    },
    "problemMatcher": []
},
{
    "label": "Start Monkeygraph",
        "detail": "Start the FIT Graphing application",
            "type": "process",
                "command": "\${config:connectiq.sdkPath}/bin/monkeygraph",
                    "windows": {
        "command": "\${config:connectiq.sdkPath}/bin/monkeygraph.bat",
            },
    "group": "none",
        "presentation": {
        "panel": "shared",
            "reveal": "never"
    },
    "problemMatcher": []
},
{
    "label": "Start ERA",
        "detail": "Start Exception Reporting Application for Connect IQ",
            "type": "process",
                "command": "\${config:connectiq.javaPath}/bin/java.exe",
                    "args": [
                        "-Dfile.encoding=UTF-8",
                        "-Dapple.awt.UIElement=true",
                        "-jar",
                        "\${config:connectiq.sdkPath}/bin/era.jar"
                    ],
                        "group": "none",
                            "presentation": {
        "panel": "shared",
            "reveal": "never"
    },
    "problemMatcher": []
}
    ],
"inputs": [
    {
        "id": "sdkVersion",
        "type": "pickString",
        "description": "What is the target SDK version?",
        "options": [
            "3.1.0",
            "3.0.0",
            "2.4.0",
            "2.3.0",
            "2.2.0",
            "2.1.0",
            "1.4.0",
            "1.3.0",
            "1.2.0"
        ],
        "default": "3.1.0"
    },
    {
        "id": "watchModel",
        "type": "pickString",
        "description": "What is the target watch model?",
        "options": [
            "approachs60",
            "approachs62",
            "d2bravo",
            "d2bravo_titanium",
            "d2charlie",
            "d2delta",
            "d2deltapx",
            "d2deltas",
            "descentmk1",
            "edge1030",
            "edge1030bontrager",
            "edge520plus",
            "edge530",
            "edge820",
            "edge830",
            "edge_1000",
            "edge_520",
            "edgeexplore",
            "epix",
            "fenix3",
            "fenix3_hr",
            "fenix5",
            "fenix5plus",
            "fenix5s",
            "fenix5splus",
            "fenix5x",
            "fenix5xplus",
            "fenix6",
            "fenix6pro",
            "fenix6s",
            "fenix6spro",
            "fenix6xpro",
            "fenixchronos",
            "fr230",
            "fr235",
            "fr245",
            "fr245m",
            "fr630",
            "fr645",
            "fr645m",
            "fr735xt",
            "fr920xt",
            "fr935",
            "fr945",
            "gpsmap66",
            "gpsmap86",
            "legacyherocaptainmarvel",
            "legacyherofirstavenger",
            "legacysagadarthvader",
            "legacysagarey",
            "marqadventurer",
            "marqathlete",
            "marqaviator",
            "marqcaptain",
            "marqcommander",
            "marqdriver",
            "marqexpedition",
            "oregon7xx",
            "rino7xx",
            "venu",
            "vivoactive",
            "vivoactive3",
            "vivoactive3d",
            "vivoactive3m",
            "vivoactive3mlte",
            "vivoactive4",
            "vivoactive4s",
            "vivoactive_hr"
        ],
        "default": "vivoactive3"
    }
]
}`];
}

function createAppFile(appName: string): fileData {
    return [`source / ${appName} App.mc`,
    `using Toybox.Application as App;
using Toybox.WatchUi as Ui;

class $ { appName } App extends App.AppBase {

    function initialize() {
        AppBase.initialize();
    }

    // onStart() is called on application start up
    function onStart(state) {
    }

    // onStop() is called when your application is exiting
    function onStop(state) {
    }

    // Return the initial view of your application here
    function getInitialView() {
        return [new ${ appName}View(), new ${appName}Delegate()];
    }

} `];
}

function createDelegateFile(appName: string): fileData {
    return [`source / ${appName} Delegate.mc`,
    `using Toybox.WatchUi as Ui;

class $ { appName } Delegate extends Ui.BehaviorDelegate {

    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        Ui.pushView(new Rez.Menus.MainMenu(), new ${ appName}MenuDelegate(), Ui.SLIDE_UP);
        return true;
    }

} `];
}

function createMenuDelegateFile(appName: string): fileData {
    return [`source / ${appName} MenuDelegate.mc`,
        `using Toybox.WatchUi as Ui;
using Toybox.System as Sys;

class $ { appName } MenuDelegate extends Ui.MenuInputDelegate {

    function initialize() {
        MenuInputDelegate.initialize();
    }

    function onMenuItem(item) {
        if (item == : item_1) {
            Sys.println("item 1");
        } else if (item == : item_2) {
            Sys.println("item 2");
        }
    }

} `];
}

function createViewFile(appName: string): fileData {
    return [`source / ${appName} View.mc`,
        `using Toybox.WatchUi as Ui;

class $ { appName } View extends Ui.View {

    function initialize() {
        View.initialize();
    }

    // Load your resources here
    function onLayout(dc) {
        setLayout(Rez.Layouts.MainLayout(dc));
    }

    // Called when this View is brought to the foreground. Restore
    // the state of this View and prepare it to be shown. This includes
    // loading resources into memory.
    function onShow() {
    }

    // Update the view
    function onUpdate(dc) {
        // Call the parent onUpdate function to redraw the layout
        View.onUpdate(dc);
    }

    // Called when this View is removed from the screen. Save the
    // state of this View here. This includes freeing resources from
    // memory.
    function onHide() {
    }

}
`];
}

function createDrawablesFiles(): fileData {
    return ['resources/drawables/drawables.xml',
        `<drawables>
    <bitmap id="LauncherIcon" filename = "launcher_icon.png" />
</drawables>`];
}

function createLayoutFile(): fileData {
    return ['resources/layouts/layout.xml',
        `<layout id="MainLayout">
    <label x="center" y="5" text="@Strings.prompt" color="Gfx.COLOR_WHITE" justification="Gfx.TEXT_JUSTIFY_CENTER" />
    <bitmap id="id_monkey" x="center" y="30" filename="../drawables/monkey.png" />
</layout>`];
}

function createMenuFile(): fileData {
    return ['resources/menus/menu.xml',
        `<menu id="MainMenu">
    <menu-item id="item_1">@Strings.menu_label_1</menu-item>
    <menu-item id="item_2">@Strings.menu_label_2</menu-item>
</menu>`];
}

function createStringsFile(appName: string): fileData {
    return ['resources/strings/strings.xml',
        `<strings>
        <string id="AppName">${appName}</string>

    <string id="prompt">Click the menu button</string>

    <string id="menu_label_1">Item 1</string>
    <string id="menu_label_2">Item 2</string>
</strings>`];
}

function createFile(filename: string, content: string) {
    if (vscode.workspace.rootPath) {
        const newFile = vscode.Uri.file(path.join(vscode.workspace.rootPath, filename));

        const wsedit = new vscode.WorkspaceEdit();
        wsedit.createFile(newFile, { overwrite: true, ignoreIfExists: true });
        wsedit.insert(newFile, new vscode.Position(0, 0), content);
        vscode.workspace.applyEdit(wsedit);

    } else {
        vscode.window.showErrorMessage("You must open a folder before creating a new Connect IQ project.");
    }
}

function createProjectFiles(appId: string, appName: string) {
    filesToCreate.push(createIQManifestFile(appId, appName));
    filesToCreate.push(createJungleFile());
    filesToCreate.push(createVSCodeTasksFile());
}

function createSrcFiles(appName: string) {
    filesToCreate.push(createAppFile(appName));
    filesToCreate.push(createDelegateFile(appName));
    filesToCreate.push(createMenuDelegateFile(appName));
    filesToCreate.push(createViewFile(appName));
}

function createResourceFiles(appName: string) {
    filesToCreate.push(createDrawablesFiles());
    filesToCreate.push(createLayoutFile());
    filesToCreate.push(createMenuFile());
    filesToCreate.push(createStringsFile(appName));
}

async function getUUID() {
    let newID: string = uuidv4();

    newID = newID.replace(/-/g, '');
    newID = newID.trim();

    return newID;
}

async function newIQProject() {
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage("Please create and open a folder for your new Connect IQ app.");
    } else {
        const newId = await getUUID();

        const projectName = await getProjectName();
        if (projectName) {
            createProjectFiles(newId, projectName);
            createSrcFiles(projectName);
            createResourceFiles(projectName);

            while (filesToCreate.length > 0) {
                const nextSet = filesToCreate.pop();
                createFile(nextSet[0], nextSet[1]);
            }
        } else {
            vscode.window.showErrorMessage("Please provide a name for this new Connect IQ app.");
        }
    }
}

async function getProjectName() {
    let options: vscode.InputBoxOptions = {
        prompt: "Name for new Connect IQ app: ",
        placeHolder: "app name"
    };

    const value = await vscode.window.showInputBox(options);
    if (!value) {
        return;
    }
    else {
        return value;
    }
}

export async function activate(context: vscode.ExtensionContext) {

    var disposable = vscode.commands.registerCommand('extension.newiqproject', newIQProject);

    context.subscriptions.push(disposable);
}