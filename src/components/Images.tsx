const Images = {
    Logo: require('../assets/argentBankLogo.png'),
    Tree: require('../assets/bank-tree.jpeg'),
    Chat: require('../assets/icon-chat.png'),
    Money: require('../assets/icon-money.png'),
    Security: require('../assets/icon-security.png'),
}

export type Image = keyof typeof Images;
export default Images;