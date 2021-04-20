
let fs= require('fs');
let path = require('path');
let extensions={
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}
let input = process.argv.slice(2);
let folderpath=input[0];//extensions stored in folderpath
console.log(input[0]);//print extension
let extFolderPath = folderpath;
function createFolder(){
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}

function checkfolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr = extensions[key];// values string to array
        //array.includes extension passed exists in values array(arr) or not
        let eon = arr.includes(extension);
        if(eon==true)
        {
            // console.log(true);
            console.log(key);//what folder it belongs
            extFolderPath = path.join(folderPath,key);//creates string not folder
            console.log(extFolderPath);
            break;    
        }
        
    }
    return fs.existsSync(extFolderPath);
    
}

let content = fs.readdirSync(folderpath);//reads content of folder given as input
for(let i=0;i<content.length;i++)
{
    // console.log(content[i]);
    //extensions
    console.log(path.extname(content[i]))//gives extension of the file

    let extensionName = path.extname(content[i]);//stores extension
    let extensionFolderExist = checkfolder(extensionName,folderpath);//passing value  of extension and folderpath
    console.log(extensionFolderExist);

    if(extensionFolderExist==false){
        createFolder();
        //file move kara dena
    }
    else{

    }
    


}
