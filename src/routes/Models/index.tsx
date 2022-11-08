import { NavigationContainerProps } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    HomePage:undefined
    Contatos: undefined
    Projetos: undefined
    Stack: undefined
    StackPage: undefined
    Splash: undefined
    
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>