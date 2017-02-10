import * as vscode from 'vscode';
import * as path from 'path';
import * as webreq from 'web-request';

function createIQManifestFile(id: string, name: string) {
    let newFile = null;

    if (vscode.workspace.rootPath) {
        newFile = vscode.Uri.parse('untitled:' + path.join(vscode.workspace.rootPath, 'manifest.xml'))

        vscode.workspace.openTextDocument(newFile).then(document => {
            const edit = new vscode.WorkspaceEdit();
            edit.insert(newFile, new vscode.Position(0, 0),
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
 </iq:manifest>`);

            return vscode.workspace.applyEdit(edit).then(success => {
                if (success) {
                    vscode.window.showTextDocument(document);
                } else {
                    vscode.window.showInformationMessage('Could not create Connect IQ Manifest file.');
                }
            });
        });
    } else {
        vscode.window.showErrorMessage("You must open a folder before creating a new Connect IQ project.");
    }
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
    let newId = await getUUID();

    getProjectName().then(projectName => {
        if (projectName) {
            createIQManifestFile(newId, projectName);
        } else {
            vscode.window.showErrorMessage("Please provide a name for this new project.");
        }
    });
}

function getProjectName() {
    let options: vscode.InputBoxOptions = {
        prompt: "Name for new ConnectIQ project: ",
        placeHolder: "project name"
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