/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />
var FileType = (function () {
    function FileType(inName, inType, inImageUrl, inFolder) {
        this.name = inName;
        this.type = inType;
        this.imageUrl = inImageUrl;
        this.folder = inFolder;
    }
    return FileType;
})();

function createSubfolderFiles(parentFolder, subFolders, files, folderPicture, filePicture) {
    var fileIndex, subFolderIndex;
    for (subFolderIndex = 0; subFolderIndex < subFolders.length; subFolderIndex++) {
        parentFolder.folder.push(new FileType(subFolders[subFolderIndex], "Folder", folderPicture, []));

        for (fileIndex = 0; fileIndex < files[subFolderIndex].length; fileIndex++) {
            parentFolder.folder[subFolderIndex].folder.push(new FileType(files[subFolderIndex][fileIndex], "File", filePicture, []));
        }
    }
}

var folderMusic = new FileType("$$(Music)", "Folder", "../../images/samples/tree/book.png", []);
var musicSubFolders = ["Y.Malmsteen", "WhiteSnake", "AC/DC", "Rock"];
var musicFiles = [
    ["Making Love", "Rising Force", "Fire and Ice"], ["Trouble", "Bad Boys", "Is This Love"],
    ["ThunderStruck", "T.N.T.", "The Jack"], ["Bon Jovi - Always"]];
createSubfolderFiles(folderMusic, musicSubFolders, musicFiles, "../../images/samples/tree/book.png", "../../images/samples/tree/music.png");

var folderDocuments = new FileType("$$(My_Documents)", "Folder", "../../images/samples/tree/documents-folder.png", []);
var documentsSubFolders = ["2009", "2010"];
var documentFiles = [["Month Report", "Year Report"], ["Month Report", "Year Report"]];
createSubfolderFiles(folderDocuments, documentsSubFolders, documentFiles, "../../images/samples/tree/documents-folder.png", "../../images/samples/tree/documents.png");

var folderPictures = new FileType("$$(Pictures)", "Folder", "../../images/samples/tree/coins.png", []);
var picturesSubFolders = ["$$(Birthday)2009", "$$(Birthday)2010"];
var picturesFiles = [["Picture1", "Picture2", "Picture3", "Picture4"], ["Picture1", "Picture2", "Picture3"]];
createSubfolderFiles(folderPictures, picturesSubFolders, picturesFiles, "../../images/samples/tree/coins.png", "../../images/samples/tree/coins_add.png");

var folderNetwork = new FileType("$$(Network)", "Folder", "../../images/samples/tree/door.png", []);
var networkSubFolders = ["$$(Archive)", "$$(Backup)", "FTP"];
var networkFiles = [[], [], []];
createSubfolderFiles(folderNetwork, networkSubFolders, networkFiles, "../../images/samples/tree/door_in.png", "");

var folderDeleted = new FileType("$$(Deleted)", "Folder", "../../images/samples/tree/bin_empty.png", []);
var folderComputer = new FileType("$$(Computer)", "Folder", "../../images/samples/tree/computer.png", []);
folderComputer.folder.push(folderMusic);
folderComputer.folder.push(folderDocuments);
folderComputer.folder.push(folderPictures);
folderComputer.folder.push(folderNetwork);
folderComputer.folder.push(folderDeleted);

var files = [folderComputer];

$(function () {
    $("#tree").igTree({
        checkboxMode: 'triState',
        singleBranchExpand: true,
        dataSource: $.extend(true, [], files),
        initialExpandDepth: 0,
        pathSeparator: '.',
        bindings: {
            textKey: 'name',
            valueKey: 'type',
            imageUrlKey: 'imageUrl',
            childDataProperty: 'folder'
        },
        dragAndDrop: true,
        dragAndDropSettings: {
            allowDrop: true,
            customDropValidation: function (element) {
                // Validates the drop target
                var valid = true, droppableNode = $(this);

                if (droppableNode.is('a') && droppableNode.closest('li[data-role=node]').attr('data-value') === 'File') {
                    valid = false;
                }

                return valid;
            }
        }
    });
});
//# sourceMappingURL=typescript.js.map
