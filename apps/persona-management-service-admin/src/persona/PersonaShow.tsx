import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PersonaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ageRange" source="ageRange" />
        <TextField label="attitudes" source="attitudes" />
        <TextField label="careerPath" source="careerPath" />
        <TextField
          label="challengesAndPainPoints"
          source="challengesAndPainPoints"
        />
        <TextField label="children" source="children" />
        <TextField
          label="communicationChannels"
          source="communicationChannels"
        />
        <TextField label="competitorProducts" source="competitorProducts" />
        <TextField label="completed" source="completed" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="culturalAndSocialInfluences"
          source="culturalAndSocialInfluences"
        />
        <TextField label="currentlyPursuing" source="currentlyPursuing" />
        <TextField label="definition" source="definition" />
        <TextField label="does" source="does" />
        <TextField label="familyStatus" source="familyStatus" />
        <TextField label="featureAnalysis" source="featureAnalysis" />
        <TextField label="feels" source="feels" />
        <TextField label="gender" source="gender" />
        <TextField label="generalLifestyle" source="generalLifestyle" />
        <TextField label="hobbiesAndInterests" source="hobbiesAndInterests" />
        <TextField label="ID" source="id" />
        <TextField label="incomeLevel" source="incomeLevel" />
        <TextField label="location" source="location" />
        <TextField label="mediaChannels" source="mediaChannels" />
        <TextField label="missingFeatures" source="missingFeatures" />
        <TextField
          label="motivationsAndDesires"
          source="motivationsAndDesires"
        />
        <TextField label="name" source="name" />
        <TextField label="needs" source="needs" />
        <TextField label="occupation" source="occupation" />
        <TextField label="otherHabits" source="otherHabits" />
        <TextField label="personaAge" source="personaAge" />
        <TextField label="productPreferences" source="productPreferences" />
        <TextField label="satisfactionLevels" source="satisfactionLevels" />
        <TextField label="says" source="says" />
        <TextField label="technologyUsage" source="technologyUsage" />
        <TextField label="thinks" source="thinks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valuedFeatures" source="valuedFeatures" />
        <TextField label="values" source="values" />
        <TextField label="wantsAndGoals" source="wantsAndGoals" />
      </SimpleShowLayout>
    </Show>
  );
};
