import * as graphql from "@nestjs/graphql";
import { AccountingAndFinanceService } from "./accountingandfinance.service";

export class AccountingAndFinanceResolver {
  constructor(protected readonly service: AccountingAndFinanceService) {}
}
