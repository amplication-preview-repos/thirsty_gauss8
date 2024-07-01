import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("RefineConceptOutputObject")
class RefineConceptOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    refinedConcept!: string;
}

export { RefineConceptOutput as RefineConceptOutput };