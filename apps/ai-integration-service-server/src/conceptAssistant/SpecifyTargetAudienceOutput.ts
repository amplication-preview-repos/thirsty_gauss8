import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("SpecifyTargetAudienceOutputObject")
class SpecifyTargetAudienceOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    refinedAudienceDescription!: string;
}

export { SpecifyTargetAudienceOutput as SpecifyTargetAudienceOutput };