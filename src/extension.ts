import * as vscode from 'vscode';
import * as path from 'path';
import * as webreq from 'web-request';

function createIQManifestFile(id: string, name: string) {
    createFile('manifest.xml', 
                `<iq:manifest version="1">
    <iq:application entry="" id="${id}" name="${name}" launcherIcon="" type="" minSdkVersion="">
        <iq:products>
            <!-- All of the available products are listed below. Delete any that are not
                 targeted by your app. -->
            <iq:product id="square_watch"/>
            <iq:product id="tall_watch"/>
            <iq:product id="round_watch"/>
            <iq:product id="d2bravo"/>
            <iq:product id="d2bravo_titanium"/>
            <iq:product id="edge_520"/>
            <iq:product id="edge820"/>
            <iq:product id="edge_1000"/>
            <iq:product id="epix"/>
            <iq:product id="fenix3"/>
            <iq:product id="fenix3_hr"/>
            <iq:product id="fenix5"/>
            <iq:product id="fenix5x"/>
            <iq:product id="fenix5s"/>
            <iq:product id="fenixchronos"/>
            <iq:product id="fr230"/>
            <iq:product id="fr235"/>
            <iq:product id="fr630"/>
            <iq:product id="fr735xt"/>
            <iq:product id="fr920xt"/>
            <iq:product id="vivoactive"/>
            <iq:product id="vivoactive_hr"/>
            <iq:product id="oregon7xx"/>
            <iq:product id="rino7xx"/>
        </iq:products>
        <iq:permissions>
            <!-- All of the available permissions are listed below. Delete any that
                 your app does not require. -->
            <iq:uses-permission id="Communications"/>
            <iq:uses-permission id="Fit"/>
            <iq:uses-permission id="Ant"/>
            <iq:uses-permission id="FitContributor"/>
            <iq:uses-permission id="SensorHistory"/>
            <iq:uses-permission id="Sensor"/>
            <iq:uses-permission id="Positioning"/>
            <iq:uses-permission id="UserProfile"/>
            <iq:uses-permission id="PersistedContent"/>
            <iq:uses-permission id="PersistedLocations"/>
        </iq:permission>
        <iq:languages>
            <!-- All of the available languages are listed below. Delete any that
                 will not be supported by your app. -->
            <iq:language>ara</iq:language>
            <iq:language>bul</iq:language>
            <iq:language>ces</iq:language>
            <iq:language>dan</iq:language>
            <iq:language>deu</iq:language>
            <iq:language>dut</iq:language>
            <iq:language>eng</iq:language>
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
            <iq:language>nob</iq:language>
            <iq:language>pol</iq:language>
            <iq:language>por</iq:language>
            <iq:language>rus</iq:language>
            <iq:language>slo</iq:language>
            <iq:language>slv</iq:language>
            <iq:language>spa</iq:language>
            <iq:language>swe</iq:language>
            <iq:language>tha</iq:language>
            <iq:language>tur</iq:language>
            <iq:language>zhs</iq:language>
            <iq:language>zht</iq:language>
            <iq:language>zsm</iq:language>
        </iq:languages>
    </iq:application>
 </iq:manifest>`,
    true);
}

function createAppFile(appName: string) {
    createFile(`src/${appName}App.mc`,
        `using Toybox.Application as App;
using Toybox.WatchUi as Ui;

class ${appName}App extends App.AppBase {

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
        return [ new ${appName}View(), new ${appName}Delegate() ];
    }

}`, true);
}

function createDelegateFile(appName: string) {
    createFile(`src/${appName}Delegate.mc`,
        `using Toybox.WatchUi as Ui;

class ${appName}Delegate extends Ui.BehaviorDelegate {

    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        Ui.pushView(new Rez.Menus.MainMenu(), new ${appName}MenuDelegate(), Ui.SLIDE_UP);
        return true;
    }

}`, false);
}

function createMenuDelegateFile(appName: string) {
    createFile(`src/${appName}MenuDelegate.mc`,
        `using Toybox.WatchUi as Ui;
using Toybox.System as Sys;

class ${appName}MenuDelegate extends Ui.MenuInputDelegate {

    function initialize() {
        MenuInputDelegate.initialize();
    }

    function onMenuItem(item) {
        if (item == :item_1) {
            Sys.println("item 1");
        } else if (item == :item_2) {
            Sys.println("item 2");
        }
    }

}`, false);
}

function createViewFile(appName: string) {
    createFile(`src/${appName}View.mc`,
        `using Toybox.WatchUi as Ui;

class ${appName}View extends Ui.View {

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
`, false);
}

function createFile(filename: string, content: string, showAfter: boolean = false, save: boolean = true) {
    let newFile = null;

    if (vscode.workspace.rootPath) {
        newFile = vscode.Uri.parse('untitled:' + path.join(vscode.workspace.rootPath, filename));

        vscode.workspace.openTextDocument(newFile).then(document => {
            const edit = new vscode.WorkspaceEdit();
            edit.insert(newFile, new vscode.Position(0, 0), content);

            return vscode.workspace.applyEdit(edit).then(success => {
                if (success) {
                    if (showAfter) {
                        vscode.window.showTextDocument(document);
                    }

                    if (save) {
                        document.save();
                    }
                } else {
                    console.error(`vscode-monkey-c: Could not create file ${filename}`);
                    vscode.window.showErrorMessage('Could not create a file; ConnectIQ app creation may have failed.');
                }
            });
        }, err => {
            console.error(`error: ${err}`);
        });
    } else {
        vscode.window.showErrorMessage("You must open a folder before creating a new Connect IQ app.");
    }
}

function createSrcFiles(appName: string) {
    createAppFile(appName);
    createDelegateFile(appName);
    createMenuDelegateFile(appName);
    createViewFile(appName);
}

function createDrawablesFiles() {
    createFile('resources/drawables/drawables.xml',
        `<drawables>
    <bitmap id="LauncherIcon" filename="launcher_icon.png" />
</drawables>`);
}

function createLayoutFile() {
    createFile('resources/layouts/layout.xml',
        `<layout id="MainLayout">
    <label x="center" y="5" text="@Strings.prompt" color="Gfx.COLOR_WHITE" justification="Gfx.TEXT_JUSTIFY_CENTER" />
    <bitmap id="id_monkey" x="center" y="30" filename="../drawables/monkey.png" />
</layout>`);
}

function createMenuFile() {
    createFile('resources/menus/menu.xml',
        `<menu id="MainMenu">
    <menu-item id="item_1">@Strings.menu_label_1</menu-item>
    <menu-item id="item_2">@Strings.menu_label_2</menu-item>
</menu>`);
}

function createStringsFile(appName: string) {
    createFile('resources/strings/strings.xml',
        `<strings>
    <string id="AppName">${appName}</string>

    <string id="prompt">Click the menu button</string>

    <string id="menu_label_1">Item 1</string>
    <string id="menu_label_2">Item 2</string>
</strings>`);
}

function createResourceFiles(appName: string) {
    createDrawablesFiles();
    createLayoutFile();
    createMenuFile();
    createStringsFile(appName);
}

async function getUUID() {
    let newID: string = "";

    let req = await webreq.get("https://www.uuidgenerator.net/api/version1");
    newID = req.content;
    newID = newID.replace(/-/g, '');
    newID = newID.trim();

    return newID;
}

async function newIQProject() {
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage("Please create and open a folder for your new Connect IQ app.")
    } else {
        let newId = await getUUID();

        getProjectName().then(projectName => {
            if (projectName) {
                createIQManifestFile(newId, projectName);
                createSrcFiles(projectName);
                createResourceFiles(projectName);
            } else {
                vscode.window.showErrorMessage("Please provide a name for this new app.");
            }
        });
    }    
}

function getProjectName() {
    let options: vscode.InputBoxOptions = {
        prompt: "Name for new ConnectIQ app: ",
        placeHolder: "app name"
    }

    return vscode.window.showInputBox(options).then(value => {
        if (!value) {
            return;
        } else {
            return value;
        }    
    });
}

export async function activate(context: vscode.ExtensionContext) {

    var disposable = vscode.commands.registerCommand('extension.newiqproject', newIQProject);

    context.subscriptions.push(disposable);
}