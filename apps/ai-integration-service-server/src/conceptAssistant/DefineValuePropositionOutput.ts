import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("DefineValuePropositionOutputObject")
class DefineValuePropositionOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    refinedValueProposition!: string;
}

export { DefineValuePropositionOutput as DefineValuePropositionOutput };