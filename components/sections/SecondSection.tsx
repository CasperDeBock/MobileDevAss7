import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GameButton from '../buttons/GameButton';
import ResultsButton from '../buttons/ResultsButton';
import NewsSection from './games/NewsSection';
import SuperDrawSection from './games/SuperDrawSection';
import DiceSection from './games/DiceSection';


function SectionSection() {

    const games=[
    {
      title: "NEWS",
      icon: "note"
      
    },
    {
        title: "DICE ROLL",
        icon: "law",
    },
    {
        title: "SUPER DRAW",
        icon: "ruby",
    },

  ]

  const [active, setActive] = useState("NEWS");
  const [page, setPage] = useState(active);

  const handleActive = (tagtitle: string) => {  
    setActive(tagtitle);
  }

    return (
        <View style={styles.sectionSection}>
            <Text style={styles.title}>Games</Text>
            <Text style={styles.sectionTitle}>Choose your game</Text>
            <ScrollView horizontal={true} style={styles.gameButtonContainer}>
                {games.map((game) => (  
                    <GameButton key={game.title} text={game.title} icon={game.icon} active={active} onTouch={handleActive} />
                ))}
            </ScrollView>

            { active === "NEWS" &&
            <View>
              <Text style={styles.title}>Check out</Text>
              <Text style={styles.sectionTitle}>Latest news</Text>
              <NewsSection/>
              <ResultsButton/>
            </View>
            }
            { active === "DICE ROLL" &&
            <DiceSection/>
            }
            { active === "SUPER DRAW" &&
            <SuperDrawSection/>
            }
       

      </View>
    )
}

const styles = StyleSheet.create({
    sectionSection: {
        backgroundColor: '#fff',
        width: '100%',
        padding : 24,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      },
      
      sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
      }, 
      gameButtonContainer: {
        display: 'flex',
        marginTop: 24,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 150,

      },
    
      
});

export default SectionSection;
