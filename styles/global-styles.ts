import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalLight = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: Colors.light.background,
        position:'relative'
    },
    calculatorContainer: {
        flex:1,
        justifyContent: 'flex-end',
        paddingBottom: 20,   
    },
    mainResult:{
        color: Colors.light.textPrimary,
        fontSize:70,
        textAlign:'right',
        fontWeight:'400'
    },
    subResult:{
        color: Colors.light.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button:{
        height:80,
        width:80,
        //backgroundColor:Colors.dark.functionsBg
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        fontWeight:400
    }
})

export const globalDark = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: Colors.dark.background,
    },
    calculatorContainer: {
        flex:1,
        justifyContent: 'flex-end',
        paddingBottom: 20,   
    },
    mainResult:{
        color: Colors.dark.textPrimary,
        fontSize:70,
        textAlign:'right',
        fontWeight:'400'
    },
    subResult:{
        color: Colors.dark.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: 300
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button:{
        height:80,
        width:80,
        //backgroundColor:Colors.dark.functionsBg
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        fontWeight:400
    }
})