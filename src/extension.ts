import * as vscode from 'vscode';
import * as path from 'path';

function createIQManifestFile() {
    let newFile = null;
    try {
        newFile = vscode.Uri.parse('untitled:' + path.join(vscode.workspace.rootPath, 'manifest.xml'));
    } catch (e) {
        console.error(e);
    }
    vscode.workspace.openTextDocument(newFile).then(document => {
    const edit = new vscode.WorkspaceEdit();
    edit.insert(newFile, new vscode.Position(0, 0),
    `<iq:manifest version="1">
    <iq:application entry="" id="" name="" launcherIcon="" type="" minSdkVersion="">
        <iq:products>
        </iq:products>
        <iq:permissions>
        </iq:permission>
    </iq:application>
 </iq:manifest>`);

    return vscode.workspace.applyEdit(edit).then(success => {
        if (success) {
            vscode.window.showTextDocument(document);
        } else {
            vscode.window.showInformationMessage('Could not create Manifest file.');
        }
    });
});
}

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.newiqproject', () => {
        createIQManifestFile();
    });

    context.subscriptions.push(disposable);
}