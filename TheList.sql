USE [master]
GO

IF db_id('TheList') IS NULL
  CREATE DATABASE TheList
GO

USE TheList
GO


DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Follower];
DROP TABLE IF EXISTS [ListType];
DROP TABLE IF EXISTS [List];
DROP TABLE IF EXISTS [Comment];
GO 

CREATE TABLE [UserProfile] (
  [Id] INTEGER PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(30) NOT NULL,
  [Email] nvarchar(40) NOT NULL,
  [FirebaseUserId] nvarchar(28) NOT NULL,
  [UserName] nvarchar(30) NOT NULL,
  [ProfilePicUrl] nvarchar(255),

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [Follower] (
  [Id] INTEGER PRIMARY KEY identity NOT NULL,
  [UserProfileId] INTEGER NOT NULL,

  CONSTRAINT FK_Follower_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id)
)
GO

CREATE TABLE [ListType] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(20) NOT NULL
)
GO

CREATE TABLE [List] (
  [Id] INTEGER PRIMARY KEY identity NOT NULL,
  [Title] nvarchar(30) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DateUpdated] datetime,
  [Deadline] datetime,
  [Content] nvarchar(255),
  [Active] bit NOT NULL,
  [Public] bit NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [ListTypeId] INTEGER NOT NULL,

  CONSTRAINT FK_List_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id),
  CONSTRAINT FK_List_ListType FOREIGN KEY (ListTypeId) REFERENCES ListType(Id)
)
GO

CREATE TABLE [Comment] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Message] nvarchar(255) NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [ListId] INTEGER NOT NULL,

  CONSTRAINT FK_Comment_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id),
  CONSTRAINT FK_Comment_List FOREIGN KEY (ListId) REFERENCES List(Id)
)
GO


SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [Name], [Email], [FirebaseUserId], [UserName], [ProfilePicUrl])
VALUES 
  (1, 'Oliver Hardy', 'olie@email.com', 'MA9qsgE6vfbp2P1z0kv72bqRql43', 'Ollie', null),
  (2, 'Stan Laurel', 'stan@email.com', 'vP3tkzRXWmRzwSLGwNTBS5fJs2N2', 'Stanny-boy', null);
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Follower] ON
INSERT INTO [Follower]
  ([Id], [UserProfileId])
VALUES
  (1, 2),
  (2, 1);
SET IDENTITY_INSERT [Follower] OFF

SET IDENTITY_INSERT [ListType] ON
INSERT INTO [ListType]
  ([Id], [Name])
VALUES
  (1, 'Grocery'),
  (2, 'To Do'),
  (3, 'Other');
SET IDENTITY_INSERT [ListType] OFF

SET IDENTITY_INSERT [List] ON
INSERT INTO [List]
  ([Id], [Title], [DateCreated], [DateUpdated], [Deadline], [Content], [Active], [Public], [UserProfileId], [ListTypeId])
VALUES
  (1, 'Groceries mar 22', '03-22-2021', '03-24-2021', '03-28-2021', 'yogurt, berries, granola', 1, 1, 1, 1),
  (2, 'Potluck Graduation', '01-24-2021', null, '02-10-2021', 'seven layer dip, veggie side, croquettes, chocolate chip cookies', 1, 1, 2, 3),
  (3, 'ToDo weekend', '02-19-2021', '02-20-2021', null, 'post office, interview question review, update website', 1, 0, 2, 2);
SET IDENTITY_INSERT [List] OFF

SET IDENTITY_INSERT [Comment] ON
INSERT INTO [Comment]
  ([Id], [UserProfileId], [ListId], [Message])
VALUES
  (1, 2, 1, 'We still have two bags of granola!'),
  (2, 1, 1, 'I know. I don''t like that kind though.'),
  (3, 1, 2, 'We still need some beverages, unless y''all want to do BYOB...');
SET IDENTITY_INSERT [Comment] OFF