import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.newiqproject', () => {
        vscode.window.showInformationMessage('This action will create a new Connect IQ Manifest file.');
    });

    context.subscriptions.push(disposable);
}