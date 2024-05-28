// create a variable to hold your NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _description, _bling) {
    const nft = {
        "name": _name,
        "description": _description,
        "bling": _bling,
    };
    NFTs.push(nft);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("Name: " + NFTs[i].name);
        console.log("Description: " + NFTs[i].description);
        console.log("Bling: " + NFTs[i].bling);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length;
}

// call your functions below this line
mintNFT("Mario", "Mario is a character from the Mario franchise and the mascot of Japanese video game company Nintendo", "Gold Coin");
listNFTs();
console.log("Total Supply: " + getTotalSupply());
