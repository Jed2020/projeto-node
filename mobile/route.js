import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/components/register/register";
import Login from "./src/components/login/login";
import School from "./src/components/school/school";
import Loading from "./src/components/loading/loading";
import Logout from "./src/components/logout/logout";
import Curriculum from "./src/components/curriculum/curriculum";
import ListUser from "./src/components/list/listUser";
import ListCurriculum from "./src/components/list/listCurriculum";
import ListSchool from "./src/components/list/listSchool";
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useAuth } from './src/Auth/AuthContext'

const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { token, loading } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: "#28282a",
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}
    >
      
      {loading ? 
      <Tab.Screen name="Loading" component={Loading}
      options={{
        headerShown: false,
        tabBarVisible: false,
      }}
    />:
      token ? <>
        
        <Tab.Screen name="Habilidade" component={Curriculum}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="form" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Escolaridade" component={School}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="form" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="User" component={ListUser}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="user" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Editar Hab." component={ListCurriculum}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="edit" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Editar Esc." component={ListSchool}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="edit" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Sair" component={Logout}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="logout" size={size} color={color} />
            )
          }}
        />
      </> :
        <>
          <Tab.Screen name="Cadastro" component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color} />
              )
            }}
          />
          <Tab.Screen name="Entrar" component={Login}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <Entypo name="login" size={size} color={color} />
              )
            }}
          />
        </>
      }

    </Tab.Navigator>
  )
}
