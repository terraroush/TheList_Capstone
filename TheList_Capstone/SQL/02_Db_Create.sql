USE [master]
GO

IF db_id('TheList') IS NULL
  CREATE DATABASE TheList
GO

USE TheList
GO


DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Connection];
DROP TABLE IF EXISTS [ListKind];
DROP TABLE IF EXISTS [UserList];
DROP TABLE IF EXISTS [ListItem];
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

CREATE TABLE [Connection] (
  [Id] INTEGER PRIMARY KEY identity NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Accepted] bit NOT NULL,
  [SubscriberId] INTEGER NOT NULL,

  CONSTRAINT FK_Follower_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id)
)
GO

CREATE TABLE [ListKind] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(20) NOT NULL
)
GO

CREATE TABLE [UserList] (
  [Id] INTEGER PRIMARY KEY identity NOT NULL,
  [Title] nvarchar(30) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DateUpdated] datetime,
  [Deadline] datetime,
  [Active] bit NOT NULL,
  [Public] bit NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [ListKindId] INTEGER NOT NULL,

  CONSTRAINT FK_UserList_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id),
  CONSTRAINT FK_UserList_ListKind FOREIGN KEY (ListKindId) REFERENCES ListKind(Id)
)
GO

CREATE TABLE [ListItem] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(50) NOT NULL,
  [UserListId] INTEGER NOT NULL,

  CONSTRAINT FK_ListItem_UserList FOREIGN KEY (UserListId) REFERENCES UserList(Id)
)
GO

CREATE TABLE [Comment] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Message] nvarchar(255) NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [UserListId] INTEGER NOT NULL,

  CONSTRAINT FK_Comment_UserProfile FOREIGN KEY (UserProfileId) REFERENCES UserProfile(Id),
  CONSTRAINT FK_Comment_UserList FOREIGN KEY (UserListId) REFERENCES UserList(Id)
)
GO


SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [Name], [Email], [FirebaseUserId], [UserName], [ProfilePicUrl])
VALUES 
  (1, 'Oliver Hardy', 'olie@email.com', 'MA9qsgE6vfbp2P1z0kv72bqRql43', 'Ollie', null),
  (2, 'Stan Laurel', 'stan@email.com', 'vP3tkzRXWmRzwSLGwNTBS5fJs2N2', 'Stanny-boy', null);
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Connection] ON
INSERT INTO [Connection]
  ([Id], [UserProfileId], [Accepted], [SubscriberId])
VALUES
  (1, 1, 1, 2),
  (2, 2, 1, 1);
SET IDENTITY_INSERT [Connection] OFF

SET IDENTITY_INSERT [ListKind] ON
INSERT INTO [ListKind]
  ([Id], [Name])
VALUES
  (1, 'Grocery'),
  (2, 'To Do'),
  (3, 'Other');
SET IDENTITY_INSERT [ListKind] OFF

SET IDENTITY_INSERT [UserList] ON
INSERT INTO [UserList]
  ([Id], [Title], [DateCreated], [DateUpdated], [Deadline], [Active], [Public], [UserProfileId], [ListKindId])
VALUES
  (1, 'Groceries mar 22', '03-22-2021', '03-24-2021', '03-28-2021', 1, 1, 1, 1),
  (2, 'Potluck Graduation', '01-24-2021', null, '02-10-2021', 1, 1, 2, 3),
  (3, 'ToDo weekend', '02-19-2021', '02-20-2021', null, 1, 0, 2, 2);
SET IDENTITY_INSERT [UserList] OFF

SET IDENTITY_INSERT [ListItem] ON
INSERT INTO [ListItem]
  ([Id], [Name], [UserListId])
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
SET IDENTITY_INSERT [ListItem] OFF

SET IDENTITY_INSERT [Comment] ON
INSERT INTO [Comment]
  ([Id], [UserProfileId], [UserListId], [Message])
VALUES
  (1, 2, 1, 'We still have two bags of granola!'),
  (2, 1, 1, 'I know. I don''t like that kind though.'),
  (3, 1, 2, 'We still need some beverages, unless y''all want to do BYOB...');
SET IDENTITY_INSERT [Comment] OFF