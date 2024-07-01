import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PersonaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ageRange" source="ageRange" />
        <TextInput label="attitudes" multiline source="attitudes" />
        <TextInput label="careerPath" multiline source="careerPath" />
        <TextInput
          label="challengesAndPainPoints"
          multiline
          source="challengesAndPainPoints"
        />
        <TextInput label="children" source="children" />
        <TextInput
          label="communicationChannels"
          multiline
          source="communicationChannels"
        />
        <TextInput
          label="competitorProducts"
          multiline
          source="competitorProducts"
        />
        <TextInput label="completed" source="completed" />
        <TextInput
          label="culturalAndSocialInfluences"
          multiline
          source="culturalAndSocialInfluences"
        />
        <TextInput label="currentlyPursuing" source="currentlyPursuing" />
        <TextInput label="definition" multiline source="definition" />
        <TextInput label="does" multiline source="does" />
        <TextInput label="familyStatus" source="familyStatus" />
        <TextInput label="featureAnalysis" multiline source="featureAnalysis" />
        <TextInput label="feels" multiline source="feels" />
        <TextInput label="gender" source="gender" />
        <TextInput
          label="generalLifestyle"
          multiline
          source="generalLifestyle"
        />
        <TextInput
          label="hobbiesAndInterests"
          multiline
          source="hobbiesAndInterests"
        />
        <TextInput label="incomeLevel" source="incomeLevel" />
        <TextInput label="location" source="location" />
        <TextInput label="mediaChannels" multiline source="mediaChannels" />
        <TextInput label="missingFeatures" multiline source="missingFeatures" />
        <TextInput
          label="motivationsAndDesires"
          multiline
          source="motivationsAndDesires"
        />
        <TextInput label="name" source="name" />
        <TextInput label="needs" multiline source="needs" />
        <TextInput label="occupation" source="occupation" />
        <TextInput label="otherHabits" multiline source="otherHabits" />
        <NumberInput step={1} label="personaAge" source="personaAge" />
        <TextInput
          label="productPreferences"
          multiline
          source="productPreferences"
        />
        <TextInput
          label="satisfactionLevels"
          multiline
          source="satisfactionLevels"
        />
        <TextInput label="says" multiline source="says" />
        <TextInput label="technologyUsage" multiline source="technologyUsage" />
        <TextInput label="thinks" multiline source="thinks" />
        <TextInput label="valuedFeatures" multiline source="valuedFeatures" />
        <TextInput label="values" multiline source="values" />
        <TextInput label="wantsAndGoals" multiline source="wantsAndGoals" />
      </SimpleForm>
    </Create>
  );
};
