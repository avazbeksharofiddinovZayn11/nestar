import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';
import { MeLiked } from '../like/like';

@ObjectType()
export class Member {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => MemberType)
	memberType: MemberType;

	@Field(() => MemberStatus)
	memberStatus: MemberStatus;

	@Field(() => MemberAuthType)
	memberAuthType: MemberAuthType;

	@Field(() => String)
	memberPhone: String;

	@Field(() => String)
	memberNick: String;

	memberPassword?: string;

	@Field(() => String, { nullable: true })
	memberFullName?: string;

	@Field(() => String)
	memberImage: string;

	@Field(() => String, { nullable: true })
	memberAddress?: string;

	@Field(() => String, { nullable: true })
	memberDesc?: string;

	@Field(() => Int)
	memberProperties: Number;

	@Field(() => Int)
	memberArticles: Number;

	@Field(() => Int)
	memberFollowers: Number;

	@Field(() => Int)
	memberFollowings: Number;

	@Field(() => Int)
	memberPoints: Number;

	@Field(() => Int)
	memberLikes: Number;

	@Field(() => Int)
	memberViews: Number;

	@Field(() => Int)
	memberComments: Number;

	@Field(() => Int)
	memberRank: Number;

	@Field(() => Int)
	memberWarnings: Number;

	@Field(() => Int)
	memberBlocks: Number;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	@Field(() => String, { nullable: true })
	accessToken?: string;

	/* aggregation */

	@Field(() => [MeLiked], { nullable: true })
	memberLiked?: MeLiked[];
}

@ObjectType()
export class TotalCounter {
  @Field(() => Int, { nullable: true })
  total: number;
}

@ObjectType()
export class Members {
  @Field(() => [Member])
  list: Member[];

  @Field(() => [TotalCounter], { nullable: true })
  metaCounter: TotalCounter[];
}
