import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class SpecifyTargetAudienceInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    audienceDescription!: string;
}

export { SpecifyTargetAudienceInput as SpecifyTargetAudienceInput };