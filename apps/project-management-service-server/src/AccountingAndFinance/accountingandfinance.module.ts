import { Module } from "@nestjs/common";
import { AccountingAndFinanceService } from "./accountingandfinance.service";
import { AccountingAndFinanceController } from "./accountingandfinance.controller";
import { AccountingAndFinanceResolver } from "./accountingandfinance.resolver";

@Module({
  controllers: [AccountingAndFinanceController],
  providers: [AccountingAndFinanceService, AccountingAndFinanceResolver],
  exports: [AccountingAndFinanceService],
})
export class AccountingAndFinanceModule {}
