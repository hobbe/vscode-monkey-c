import * as vscode from 'vscode';
import * as path from 'path';

function createIQManifestFile() {
    let newFile = null;

    if (vscode.workspace.rootPath) {
        newFile = vscode.Uri.parse('untitled:' + path.join(vscode.workspace.rootPath, 'manifest.xml'))

        vscode.workspace.openTextDocument(newFile).then(document => {
            const edit = new vscode.WorkspaceEdit();
            edit.insert(newFile, new vscode.Position(0, 0),
                `<iq:manifest version="1">
    <iq:application entry="" id="" name="" launcherIcon="" type="" minSdkVersion="">
        <iq:products>
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
            <iq:uses-permission id="Communications"/>
            <iq:uses-permission id="Fit"/>
            <iq:uses-permission id="Ant"/>
            <iq:uses-permission id="FitContributor"/>
            <iq:uses-permission id="SensorHistory"/>
            <iq:uses-permission id="Sensor"/>
            <iq:uses-permission id="Positioning"/>
            <iq:uses-permission id="UserProfile"/>
        </iq:permission>
        <iq:languages>
            <iq:language>eng</iq:language>
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

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.newiqproject', () => {
        createIQManifestFile();
    });

    context.subscriptions.push(disposable);
}