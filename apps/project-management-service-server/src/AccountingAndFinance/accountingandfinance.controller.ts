import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AccountingAndFinanceService } from "./accountingandfinance.service";

@swagger.ApiTags("accountingAndFinances")
@common.Controller("accountingAndFinances")
export class AccountingAndFinanceController {
  constructor(protected readonly service: AccountingAndFinanceService) {}
}
