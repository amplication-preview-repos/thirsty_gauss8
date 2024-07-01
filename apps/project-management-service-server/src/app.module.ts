import { Module } from "@nestjs/common";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { AccountingAndFinanceModule } from "./AccountingAndFinance/accountingandfinance.module";
import { AdministrationModule } from "./Administration/administration.module";
import { AnalyticsAndInsightsModule } from "./AnalyticsAndInsights/analyticsandinsights.module";
import { BusinessStrategyModule } from "./BusinessStrategy/businessstrategy.module";
import { DiscoveryModule } from "./Discovery/discovery.module";
import { HumanResourcesModule } from "./HumanResources/humanresources.module";
import { ItModule } from "./It/it.module";
import { MarketingModule } from "./Marketing/marketing.module";
import { OperationsModule } from "./Operations/operations.module";
import { PostLaunchReviewModule } from "./PostLaunchReview/postlaunchreview.module";
import { ProductDevelopmentModule } from "./ProductDevelopment/productdevelopment.module";
import { ProductLaunchModule } from "./ProductLaunch/productlaunch.module";
import { ProductManagementModule } from "./ProductManagement/productmanagement.module";
import { ProductPlanningModule } from "./ProductPlanning/productplanning.module";
import { ProductStrategyModule } from "./ProductStrategy/productstrategy.module";
import { ProductSupportModule } from "./ProductSupport/productsupport.module";
import { QualityAssuranceModule } from "./QualityAssurance/qualityassurance.module";
import { SalesModule } from "./Sales/sales.module";
import { SoftwareDevelopmentModule } from "./SoftwareDevelopment/softwaredevelopment.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ProjectModule,
    TaskModule,
    AccountingAndFinanceModule,
    AdministrationModule,
    AnalyticsAndInsightsModule,
    BusinessStrategyModule,
    DiscoveryModule,
    HumanResourcesModule,
    ItModule,
    MarketingModule,
    OperationsModule,
    PostLaunchReviewModule,
    ProductDevelopmentModule,
    ProductLaunchModule,
    ProductManagementModule,
    ProductPlanningModule,
    ProductStrategyModule,
    ProductSupportModule,
    QualityAssuranceModule,
    SalesModule,
    SoftwareDevelopmentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
