import { NavigationContainerProps } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    HomePage: undefined
    Contatos: undefined
    Projetos: undefined
    StackPage: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>