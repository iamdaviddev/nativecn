import { View } from "react-native";
import { Title } from "@/components/Title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./Badge";

export function Skills(){
  return(
    <View className="w-full ">
      <Title>Skills</Title>

      <View className="flex-row w-full flex-wrap gap-3">
        {
          SKILLS.map(Skill => <Badge key={Skill.name} label={Skill.name} icon={Skill.icon}/>)
        }
      </View>
    </View>
  )
}