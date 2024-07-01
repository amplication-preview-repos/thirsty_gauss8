import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PersonaController } from "../persona.controller";
import { PersonaService } from "../persona.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  ageRange: "exampleAgeRange",
  attitudes: "exampleAttitudes",
  careerPath: "exampleCareerPath",
  challengesAndPainPoints: "exampleChallengesAndPainPoints",
  children: "exampleChildren",
  communicationChannels: "exampleCommunicationChannels",
  competitorProducts: "exampleCompetitorProducts",
  completed: "exampleCompleted",
  createdAt: new Date(),
  culturalAndSocialInfluences: "exampleCulturalAndSocialInfluences",
  currentlyPursuing: "exampleCurrentlyPursuing",
  definition: "exampleDefinition",
  does: "exampleDoes",
  familyStatus: "exampleFamilyStatus",
  featureAnalysis: "exampleFeatureAnalysis",
  feels: "exampleFeels",
  gender: "exampleGender",
  generalLifestyle: "exampleGeneralLifestyle",
  hobbiesAndInterests: "exampleHobbiesAndInterests",
  id: "exampleId",
  incomeLevel: "exampleIncomeLevel",
  location: "exampleLocation",
  mediaChannels: "exampleMediaChannels",
  missingFeatures: "exampleMissingFeatures",
  motivationsAndDesires: "exampleMotivationsAndDesires",
  name: "exampleName",
  needs: "exampleNeeds",
  occupation: "exampleOccupation",
  otherHabits: "exampleOtherHabits",
  personaAge: 42,
  productPreferences: "exampleProductPreferences",
  satisfactionLevels: "exampleSatisfactionLevels",
  says: "exampleSays",
  technologyUsage: "exampleTechnologyUsage",
  thinks: "exampleThinks",
  updatedAt: new Date(),
  valuedFeatures: "exampleValuedFeatures",
  values: "exampleValues",
  wantsAndGoals: "exampleWantsAndGoals",
};
const CREATE_RESULT = {
  ageRange: "exampleAgeRange",
  attitudes: "exampleAttitudes",
  careerPath: "exampleCareerPath",
  challengesAndPainPoints: "exampleChallengesAndPainPoints",
  children: "exampleChildren",
  communicationChannels: "exampleCommunicationChannels",
  competitorProducts: "exampleCompetitorProducts",
  completed: "exampleCompleted",
  createdAt: new Date(),
  culturalAndSocialInfluences: "exampleCulturalAndSocialInfluences",
  currentlyPursuing: "exampleCurrentlyPursuing",
  definition: "exampleDefinition",
  does: "exampleDoes",
  familyStatus: "exampleFamilyStatus",
  featureAnalysis: "exampleFeatureAnalysis",
  feels: "exampleFeels",
  gender: "exampleGender",
  generalLifestyle: "exampleGeneralLifestyle",
  hobbiesAndInterests: "exampleHobbiesAndInterests",
  id: "exampleId",
  incomeLevel: "exampleIncomeLevel",
  location: "exampleLocation",
  mediaChannels: "exampleMediaChannels",
  missingFeatures: "exampleMissingFeatures",
  motivationsAndDesires: "exampleMotivationsAndDesires",
  name: "exampleName",
  needs: "exampleNeeds",
  occupation: "exampleOccupation",
  otherHabits: "exampleOtherHabits",
  personaAge: 42,
  productPreferences: "exampleProductPreferences",
  satisfactionLevels: "exampleSatisfactionLevels",
  says: "exampleSays",
  technologyUsage: "exampleTechnologyUsage",
  thinks: "exampleThinks",
  updatedAt: new Date(),
  valuedFeatures: "exampleValuedFeatures",
  values: "exampleValues",
  wantsAndGoals: "exampleWantsAndGoals",
};
const FIND_MANY_RESULT = [
  {
    ageRange: "exampleAgeRange",
    attitudes: "exampleAttitudes",
    careerPath: "exampleCareerPath",
    challengesAndPainPoints: "exampleChallengesAndPainPoints",
    children: "exampleChildren",
    communicationChannels: "exampleCommunicationChannels",
    competitorProducts: "exampleCompetitorProducts",
    completed: "exampleCompleted",
    createdAt: new Date(),
    culturalAndSocialInfluences: "exampleCulturalAndSocialInfluences",
    currentlyPursuing: "exampleCurrentlyPursuing",
    definition: "exampleDefinition",
    does: "exampleDoes",
    familyStatus: "exampleFamilyStatus",
    featureAnalysis: "exampleFeatureAnalysis",
    feels: "exampleFeels",
    gender: "exampleGender",
    generalLifestyle: "exampleGeneralLifestyle",
    hobbiesAndInterests: "exampleHobbiesAndInterests",
    id: "exampleId",
    incomeLevel: "exampleIncomeLevel",
    location: "exampleLocation",
    mediaChannels: "exampleMediaChannels",
    missingFeatures: "exampleMissingFeatures",
    motivationsAndDesires: "exampleMotivationsAndDesires",
    name: "exampleName",
    needs: "exampleNeeds",
    occupation: "exampleOccupation",
    otherHabits: "exampleOtherHabits",
    personaAge: 42,
    productPreferences: "exampleProductPreferences",
    satisfactionLevels: "exampleSatisfactionLevels",
    says: "exampleSays",
    technologyUsage: "exampleTechnologyUsage",
    thinks: "exampleThinks",
    updatedAt: new Date(),
    valuedFeatures: "exampleValuedFeatures",
    values: "exampleValues",
    wantsAndGoals: "exampleWantsAndGoals",
  },
];
const FIND_ONE_RESULT = {
  ageRange: "exampleAgeRange",
  attitudes: "exampleAttitudes",
  careerPath: "exampleCareerPath",
  challengesAndPainPoints: "exampleChallengesAndPainPoints",
  children: "exampleChildren",
  communicationChannels: "exampleCommunicationChannels",
  competitorProducts: "exampleCompetitorProducts",
  completed: "exampleCompleted",
  createdAt: new Date(),
  culturalAndSocialInfluences: "exampleCulturalAndSocialInfluences",
  currentlyPursuing: "exampleCurrentlyPursuing",
  definition: "exampleDefinition",
  does: "exampleDoes",
  familyStatus: "exampleFamilyStatus",
  featureAnalysis: "exampleFeatureAnalysis",
  feels: "exampleFeels",
  gender: "exampleGender",
  generalLifestyle: "exampleGeneralLifestyle",
  hobbiesAndInterests: "exampleHobbiesAndInterests",
  id: "exampleId",
  incomeLevel: "exampleIncomeLevel",
  location: "exampleLocation",
  mediaChannels: "exampleMediaChannels",
  missingFeatures: "exampleMissingFeatures",
  motivationsAndDesires: "exampleMotivationsAndDesires",
  name: "exampleName",
  needs: "exampleNeeds",
  occupation: "exampleOccupation",
  otherHabits: "exampleOtherHabits",
  personaAge: 42,
  productPreferences: "exampleProductPreferences",
  satisfactionLevels: "exampleSatisfactionLevels",
  says: "exampleSays",
  technologyUsage: "exampleTechnologyUsage",
  thinks: "exampleThinks",
  updatedAt: new Date(),
  valuedFeatures: "exampleValuedFeatures",
  values: "exampleValues",
  wantsAndGoals: "exampleWantsAndGoals",
};

const service = {
  createPersona() {
    return CREATE_RESULT;
  },
  personas: () => FIND_MANY_RESULT,
  persona: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Persona", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PersonaService,
          useValue: service,
        },
      ],
      controllers: [PersonaController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /personas", async () => {
    await request(app.getHttpServer())
      .post("/personas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /personas", async () => {
    await request(app.getHttpServer())
      .get("/personas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /personas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/personas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /personas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/personas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /personas existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/personas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/personas")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
