USE [master]


IF db_id('TheList') IS NULL
  CREATE DATABASE TheList
GO

USE [TheList]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Connection];
DROP TABLE IF EXISTS [PlanType];
DROP TABLE IF EXISTS [Plan];
DROP TABLE IF EXISTS [PlanItem];
DROP TABLE IF EXISTS [Comment];
GO 

CREATE TABLE [UserProfile] (
  [Id] INTEGER PRIMARY KEY identity,
  [Name] nvarchar(30) NOT NULL,
  [Email] nvarchar(40) NOT NULL,
  [FirebaseUserId] nvarchar(28) NOT NULL,
  [UserName] nvarchar(30) NOT NULL,
  [ProfilePicUrl] nvarchar(255),

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [Connection] (
  [Id] INTEGER PRIMARY KEY identity,
  [ConnecterUserProfileId] INTEGER NOT NULL,
  [ProviderUserProfileId] INTEGER NOT NULL,

  CONSTRAINT [FK_Connection_UserProfile_Connecter] FOREIGN KEY (ConnecterUserProfileId) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_Connection_UserProfile_Provider] FOREIGN KEY (ProviderUserProfileId) REFERENCES [UserProfile] ([Id]),

)


CREATE TABLE [PlanType] (
  [Id] integer PRIMARY KEY identity,
  [IsGrocery] bit NOT NULL
)


CREATE TABLE [Plan] (
  [Id] INTEGER PRIMARY KEY identity,
  [Title] nvarchar(30) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DateUpdated] datetime,
  [Deadline] datetime,
  [Active] bit NOT NULL,
  [Public] bit NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [PlanTypeId] INTEGER NOT NULL,

  CONSTRAINT [FK_Plan_UserProfile] FOREIGN KEY (UserProfileId) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_Plan_PlanType] FOREIGN KEY (PlanTypeId) REFERENCES [PlanType] ([Id])
)


CREATE TABLE [PlanItem] (
  [Id] integer PRIMARY KEY identity,
  [Name] nvarchar(100) NOT NULL,
  [PlanId] INTEGER NOT NULL,

  CONSTRAINT [FK_PlanItem_Plan] FOREIGN KEY (PlanId) REFERENCES [Plan] ([Id])
)


CREATE TABLE [Comment] (
  [Id] integer PRIMARY KEY identity,
  [Message] nvarchar(255) NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [PlanId] INTEGER NOT NULL,

  CONSTRAINT [FK_Comment_UserProfile] FOREIGN KEY (UserProfileId) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_Comment_Plan] FOREIGN KEY (PlanId) REFERENCES [Plan] ([Id])
)
GO


SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [Name], [Email], [FirebaseUserId], [UserName], [ProfilePicUrl])
VALUES 
  (1, 'Sophie Roush', 'sophie@email.com', 'MA9qsgE6vfbp2P1z0kv72bqRql43', 'Sophie', null),
  (2, 'George Roush', 'george@email.com', 'vP3tkzRXWmRzwSLGwNTBS5fJs2N2', 'Georgie', null);
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Connection] ON
INSERT INTO [Connection]
  ([Id], [ConnecterUserProfileId], [ProviderUserProfileId])
VALUES
  (1, 1, 2),
  (2, 2, 1);
SET IDENTITY_INSERT [Connection] OFF

SET IDENTITY_INSERT [PlanType] ON
INSERT INTO [PlanType]
  ([Id], [IsGrocery])
VALUES
  (1, 1),
  (2, 0);
SET IDENTITY_INSERT [PlanType] OFF

SET IDENTITY_INSERT [Plan] ON
INSERT INTO [Plan]
  ([Id], [Title], [DateCreated], [DateUpdated], [Deadline], [Active], [Public], [UserProfileId], [PlanTypeId])
VALUES
  (1, 'Groceries Feb 12', '02-12-2021', '02-16-2021', '02-17-2021', 1, 1, 1, 1),
  (2, 'Potluck Graduation', '01-24-2021', null, '02-10-2021', 1, 1, 2, 2),
  (3, 'ToDo weekend', '02-19-2021', '02-20-2021', null, 1, 0, 2, 2);
SET IDENTITY_INSERT [Plan] OFF

SET IDENTITY_INSERT [PlanItem] ON
INSERT INTO [PlanItem]
  ([Id], [Name], [PlanId])
VALUES
  (1, 'Broccoli', 1),
  (2, 'Rice', 1),
  (3, 'Mushrooms', 1),
  (4, 'seven layer dip', 2),
  (5, 'veggie side', 2),
  (6, 'croquettes', 2),
  (7, 'chocolate chip cookies', 2),
  (8, 'post office', 3),
  (9, 'interview question review', 3),
  (10, 'update website', 3);
SET IDENTITY_INSERT [PlanItem] OFF

SET IDENTITY_INSERT [Comment] ON
INSERT INTO [Comment]
  ([Id], [UserProfileId], [PlanId], [Message])
VALUES
  (1, 2, 1, 'We still have two bags of granola!'),
  (2, 1, 1, 'I know. I don''t like that kind though.'),
  (3, 1, 2, 'We still need some beverages, unless y''all want to do BYOB...');

SET IDENTITY_INSERT [Comment] OFF